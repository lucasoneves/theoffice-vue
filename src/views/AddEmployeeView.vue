<template>
  <div>
    <HeroSectionIndex title="Add new employee" />
    <div class="container">
      <h2>Fill the new employee info below:</h2>
      <form action="" @submit.prevent="handleSubmit">
        <section class="form-employee">
          <label for="employee_name">
            <MainInputIndex class="input" input-type="text" placeholder="Name" name="employeeName" v-model="employeeRef.name" />
          </label>
          <label for="employee_role">
            <MainInputIndex class="input" input-type="text" placeholder="Role" name="role" v-model="employeeRef.role" />
          </label>
          <label for="employee_email">
            <MainInputIndex class="input" input-type="email" placeholder="E-mail" name="email" v-model="employeeRef.email" />
          </label>
          <label for="employee_goal_target">
            <MainInputIndex class="input" input-type="number" placeholder="Target Goal" name="targetGoal" v-model="employeeRef.goal.target" />
          </label>
          <label for="employee_goal_current">
            <MainInputIndex class="input" input-type="number" placeholder="Current Goal" name="currentGoal" v-model="employeeRef.goal.current" />
          </label>
          <label for="employee_avatar">
            <MainInputIndex class="input" input-type="file" placeholder="Avatar" name="avatar" v-model="employeeRef.avatar" />
          </label>
        </section>
        <Button title="Save" :is-primary="true" class="button" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue'
import Button from '@/components/Button/index.vue'
import MainInputIndex from '@/components/MainInput/MainInputIndex.vue'
import { useEmployeeStore } from '@/stores/EmployeesStore'
import router from '@/router'

const store = useEmployeeStore()
const employeeRef = ref({
  name: '',
  role: '',
  email: '',
  id: '',
  status: 1,
  avatar: '',
  goal: {
    target: 0,
    current: 0,
  }
})

function handleSubmit() {
  console.log(employeeRef.value)

  store.addEmployeeList(employeeRef.value)
  router.push('/')
}

</script>

<style lang="scss" scoped>
h2 {
  font-size: 20px;
}

.form-employee {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(400px, 1fr));
  gap: 20px;

  .main-input {
    width: 100%;
  } 
}

.button {
  flex: 1
}
</style>
