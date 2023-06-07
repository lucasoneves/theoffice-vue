<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'
import Employee from '../components/Employee/index.vue'
import EmployeeListView from '../components/EmployeeListView/index.vue'
import ProgressBar from '../components/ProgressBar/index.vue'
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue'
import ButtonAddNew from '@/components/ButtonAddNew/ButtonAddNewIndex.vue'
// import { useEmployees } from '@/composables/useEmployees';
import { useFetch } from '@/composables/useFetch'
import router from '@/router'
import employeesData from '@/data/employees.json'
const favorites = ref([])

const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos')

const employeeList = reactive(employeesData)

const displayTotalTarget = computed(() => {
  const targets = employeeList.map((e) => e.goal?.target)
  const hitTargets = employeeList.map((e) => e.goal?.current)
  const totalHitTargets = hitTargets.reduce((a, b) => a + b)
  const totalFinalTargets = targets.reduce((a, b) => a + b)
  const resultFinal = (totalHitTargets * 100) / totalFinalTargets
  return resultFinal.toFixed(1)
})

function displayTargetPercentage(user: any) {
  return `${((user.goal.current * 100) / user.goal.target).toFixed(1) + '%'}`
}

function isFavorite(employee: { id: Number }) {
  return favorites.value.indexOf(employee.id) != -1
}

function handleFavoriteCharacter(employee: { id: any }) {
  favorites.value.push(employee.id)
}

function handleUnFavoriteCharacter(employee: { id: any }) {
  const character = favorites.value.filter((item) => item !== employee.id)
  favorites.value = character
}

function goToAddEmployee() {
  router.push(router.currentRoute.value.path + '/add')
}

function handleEditEmployee(id: string) {
  router.push(router.currentRoute.value.path + '/edit/' + id)
}
</script>

<template>
  <main>
    <HeroSectionIndex title="Employees">
      <ButtonAddNew action="add-employee" @add-employee="goToAddEmployee" />
    </HeroSectionIndex>
    <div class="container">
      <h2 class="title-total">
        Total target: <strong>{{ displayTotalTarget + '%' }}</strong>
      </h2>
      <ProgressBar :total="displayTotalTarget" />
      <EmployeeListView>
        <template v-for="employee in employeeList" :key="employee.id">
          <Employee
            :key="employee.id"
            :user="employee"
            @handle-favorite="() => handleFavoriteCharacter(employee)"
            @handle-unfavorite="() => handleUnFavoriteCharacter(employee)"
            :isFavorite="isFavorite(employee)"
            :percentage="displayTargetPercentage(employee)"
            @edit-employee="handleEditEmployee(employee.id)"
            v-if="employee.status === 1"
          />
        </template>
      </EmployeeListView>
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
