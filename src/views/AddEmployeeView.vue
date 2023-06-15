<template>
  <div>
    <HeroSectionIndex title="Add new employee" />
    <div class="container">
      <h2>Fill the new employee info below:</h2>
      <form action="">
        <label for="employee_name">
          <MainInputIndex input-type="text" placeholder="Name" name="employeeName" />
        </label>
        <label for="employee_role">
          <MainInputIndex input-type="text" placeholder="Role" name="role" />
        </label>
        <label for="employee_email">
          <MainInputIndex input-type="text" placeholder="E-mail" name="email" />
        </label>
        <label for="employee_goal_target">
          <MainInputIndex input-type="text" placeholder="Target Goal" name="targetGoal" />
        </label>
        <label for="employee_goal_current">
          <MainInputIndex input-type="text" placeholder="Current Goal" name="currentGoal" />
        </label>
        <Button title="Save" :is-primary="true" class="button" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue'
import Button from '@/components/Button/index.vue'
import MainInputIndex from '@/components/MainInput/MainInputIndex.vue'
</script>

<style scoped>
  h2 {
    font-size: 20px;
  }

  form {
    margin-top: 50px;
    display: flex;
    gap: 20px;
  }

  .button {
    flex: 1
  }
</style>
