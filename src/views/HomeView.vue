<script setup lang="ts">

import { reactive, ref, computed } from 'vue'
import Employee from '../components/Employee/index.vue'
import EmployeeListView from '../components/EmployeeListView/index.vue'
import ProgressBar from '../components/ProgressBar/index.vue'
import Button from '../components/Button/index.vue'





const favorites = ref([])
const users = ref([])

const COMPANY_EMAIL_DOMAIN = 'dundermifflin.com'


const employeeList = reactive([
  {
    name: 'Jim Halpert',
    role: 'Salesman',
    email: `jim@${COMPANY_EMAIL_DOMAIN}`,
    id: '1c9df8c7-158d-4b77-8b23-a9d669dfaca3',
    status: 1,
    avatar: 'https://i.pinimg.com/originals/c9/32/83/c932837c36cb0cc2d60d290c72235f50.png',
    goal: {
      target: 2000,
      current: 0
    }
  },
  {
    name: 'Dwight Scrhute',
    role: 'Salesman',
    email: `dwight@${COMPANY_EMAIL_DOMAIN}`,
    id: '1c9df8c7-158d-4b',
    status: 1,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Dwight_Schrute.jpg/220px-Dwight_Schrute.jpg',
    goal: {
      target: 1800,
      current: 1
    }
  },
  {
    name: 'Kevin Malone',
    role: 'Accounting',
    email: `kevin@${COMPANY_EMAIL_DOMAIN}`,
    id: '0f0defb9-bb10-46c1-96bb-b63453347dcb',
    status: 1,
    avatar: 'https://pbs.twimg.com/profile_images/515307069533331457/J-THo7yG_400x400.jpeg',
    goal: {
      target: 1400,
      current: 14
    }
  },
  {
    name: 'Michael Scott',
    role: 'Regional Manager',
    email: `michael@${COMPANY_EMAIL_DOMAIN}`,
    id: '29f12be7-6cdc-4f4b-be0e-ecb378db14bc',
    status: 1,
    avatar: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/michael-scott.jpg',
    goal: {
      target: 1300,
      current: 130
    }
  }
])



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
</script>

<template>
  <main>
    <header class="header-section">
      <div class="container">
        <div class="actions">
          <h2>Employees</h2>
          <Button class="actions__button">
            <v-icon name="bi-plus-circle" fill="white" width="22" height="22" />Add new
          </Button>
        </div>
      </div>
    </header>
    <div class="container">
      <h2 class="title-total">Total target: <strong>{{ displayTotalTarget + '%' }}</strong></h2>
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
