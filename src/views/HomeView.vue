<script setup lang="ts">
import { ref } from 'vue'
import Employee from '../components/Employee/index.vue'
import ViewList from '../components/ViewList/index.vue'

const employeeList = ref([
  {
    name: 'Jim Halpert',
    role: 'Salesman',
    email: 'John@John.com',
    id: '1c9df8c7-158d-4b77-8b23-a9d669dfaca3',
    status: 1,
    avatar: 'https://i.pinimg.com/originals/c9/32/83/c932837c36cb0cc2d60d290c72235f50.png'
  },
  {
    name: 'Dwight Scrhute',
    role: 'Salesman',
    email: 'dwight.scrhute@gmail.com',
    id: '1c9df8c7-158d-4b',
    status: 1,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Dwight_Schrute.jpg/220px-Dwight_Schrute.jpg'
  },
  {
    name: 'Kevin Malone',
    role: 'Accounting',
    email: 'kevin@dundermifflin.com',
    id: '0f0defb9-bb10-46c1-96bb-b63453347dcb',
    status: 1,
    avatar: 'https://pbs.twimg.com/profile_images/515307069533331457/J-THo7yG_400x400.jpeg'
  },
  {
    name: 'Michael Scott',
    role: 'Regional Manager',
    email: 'michael@dundermifflin.com',
    id: '29f12be7-6cdc-4f4b-be0e-ecb378db14bc',
    status: 1,
    avatar: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/michael-scott.jpg'
  }
])

const favorites = ref([])

function handleFavoriteCharacter(employee) {
  favorites.value.push(employee.id)
}

function handleUnFavoriteCharacter(employee) {
  const character = favorites.value.filter(item => item !== employee.id)
  favorites.value = character
  console.log(character)
}
</script>

<template>
  <main>
    <header class="header-section">
      <div class="container">
        <div class="actions">
          <h2>Employees</h2>
          <button class="actions__button">
            <v-icon name="bi-plus-circle" fill="white" width="22" height="22" />Add new</button>
        </div>
      </div>
    </header>
    <div class="container">
      <ViewList>
        <template v-for="employee in employeeList" :key="employee.id">
          <Employee :name="employee.name" :role="employee.role" :email="employee.email" :avatar="employee.avatar"
            v-if="employee.status === 1" :handleFavorite="() => handleFavoriteCharacter(employee)"
            :handleUnfavorite="() => handleUnFavoriteCharacter(employee)"
            :isFavorite="favorites.indexOf(employee.id) != -1" />

        </template>
      </ViewList>
    </div>
  </main>
</template>
