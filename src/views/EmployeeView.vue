<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Employee from '../components/Employee/EmployeeIndex.vue'
import EmployeeListView from '../components/EmployeeListView/index.vue'
import ProgressBar from '../components/ProgressBar/index.vue'
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue'
import ButtonAddNew from '@/components/ButtonAddNew/ButtonAddNewIndex.vue'
// import { useEmployees } from '@/composables/useEmployees';
import router from '@/router'
import { onSnapshot, doc } from 'firebase/firestore';
import { useEmployeeStore } from '@/stores/EmployeesStore'
import { employeesColection } from '@/main'

const store = useEmployeeStore()

interface EmployeeType {
  id: string
  name: string
  role: string
  email: string
  active: boolean
  avatar: string
  goal: { target: number; current: number }
}

const favorites = ref<Array<EmployeeType>>([])

const displayTotalTarget = computed(() => {
  let resultFinal
  const targets = store.employeesData && store.employeesData.map((e) => e.goal?.target)
  const hitTargets = store.employeesData && store.employeesData.map((e) => e.goal?.current)
  const totalHitTargets = hitTargets && hitTargets.reduce((a, b) => a + b)
  const totalFinalTargets = targets && targets.reduce((a, b) => a + b)
  resultFinal = (totalHitTargets * 100) / totalFinalTargets
  return isNaN(resultFinal) ? 0 : resultFinal?.toFixed(1)
})

function displayEmployeeTargetPercentage(user: any) {
  if (user.goal.target) {
    const result = `${
      ((Number(user.goal.current) * 100) / Number(user.goal.target)).toFixed(1) + '%'
    }`
    if (result) {
      return result
    } else {
      return `No data`
    }
  } else {
    return 'Not applicable'
  }
}

function isFavorite(employee: EmployeeType) {
  return favorites.value.length && favorites.value.indexOf(employee) != -1 ? true : false
}

function handleFavoriteCharacter(selected: EmployeeType) {
  const hasFavorites = favorites.value.length >= 0
  const isFavorite = favorites.value.find((employee) => employee.id == selected.id)
  if (!hasFavorites || !isFavorite) {
    favorites.value.push(selected)
  }
}

function handleUnFavoriteCharacter(selected: EmployeeType) {
  const character = favorites.value.filter((item) => selected.id !== item.id)
  favorites.value = character
}

function goToAddEmployee() {
  router.push(router.currentRoute.value.path + '/add')
}

function handleEditEmployee(id: string) {
  router.push(router.currentRoute.value.path + '/edit/' + id)
}

onMounted(() => {
  onSnapshot(employeesColection, snapshot => {
    const employeeList = snapshot.docs.map(employee => employee.data())
    store.addEmployeeList(employeeList)
  })
})
</script>

<template>
  <main>
    <HeroSectionIndex title="Employees">
      <ButtonAddNew action="add-employee" @add-employee="goToAddEmployee" />
    </HeroSectionIndex>
    <div class="container">
      <template v-if="store.employeesData.length">
        <h2 class="title-total">
          Total target: <strong>{{ displayTotalTarget + '%' }}</strong>
        </h2>
        <ProgressBar :total="Number(displayTotalTarget)" />
      </template>
      <EmployeeListView v-if="store.employeesData.length">
        <template v-for="employee in store.employeesData" :key="employee.id">
          <Employee
            :key="employee.id"
            :user="employee"
            @handle-favorite="() => handleFavoriteCharacter(employee)"
            @handle-unfavorite="() => handleUnFavoriteCharacter(employee)"
            :isFavorite="isFavorite(employee)"
            :percentage="displayEmployeeTargetPercentage(employee)"
            @edit-employee="handleEditEmployee(employee.id)"
            v-if="employee.active"/>
        </template>
      </EmployeeListView>
      <EmptyResult v-else><h2>No employees registered</h2></EmptyResult>
    </div>
  </main>
</template>

<style scoped lang="scss">
.title-total {
  margin-bottom: 10px;
  font-size: 20px;

  strong {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
