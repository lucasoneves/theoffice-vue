<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import Employee from '../components/Employee/index.vue'
import EmployeeListView from '../components/EmployeeListView/index.vue'
import ProgressBar from '../components/ProgressBar/index.vue'
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue'
import ButtonAddNew from '@/components/ButtonAddNew/ButtonAddNewIndex.vue'
// import { useEmployees } from '@/composables/useEmployees';
import router from '@/router'

import { useEmployeeStore } from '@/stores/EmployeesStore'

const employeeList = useEmployeeStore().employeesData

interface EmployeeType {
  id: string
  name: string
  role: string
  email: string
  status: number
  avatar: string
  goal: { target: number; current: number }
}

const favorites = ref<Array<EmployeeType>>([])

const displayTotalTarget = computed(() => {
  const targets = employeeList.map((e) => e.goal.target)
  const hitTargets = employeeList.map((e) => e.goal.current)
  const totalHitTargets = hitTargets && hitTargets.reduce((a, b) => a + b)
  const totalFinalTargets = targets && targets.reduce((a, b) => a + b)
  const resultFinal = (totalHitTargets * 100) / totalFinalTargets
  return resultFinal.toFixed(1)
})

function displayTargetPercentage(user: any) {
  return `${((user.goal.current * 100) / user.goal.target).toFixed(1) + '%'}`
}

function isFavorite(employee: EmployeeType) {
  return favorites.value.length && favorites.value.indexOf(employee) != -1
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