<template>
  <div>
    <HeroSectionIndex title="Add new employee" />
    <h2>Fill the new employee info below</h2>
    <form action="">
      <label for="employee_name">
        <input type="text" placeholder="Name">
      </label>
      <label for="employee_role">
        <input type="text" placeholder="Role" id="employee_role">
      </label>
      <label for="employee_email">
        <input type="text" placeholder="Email" id="employee_email">
      </label>
      <label for="employee_avatar">
        <input type="text" placeholder="Avatar" id="employee_avatar">
      </label>
      <label for="employee_goal_target">
        <input type="text" placeholder="Target goal" id="employee_goal_target">
      </label>
      <label for="employee_goal_current">
        <input type="text" placeholder="Current goal" id="employee_goal_current">
      </label>
      <Button title="Save" :is-primary="true"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue';
import Button from '@/components/Button/index.vue';


</script>

<style scoped>

</style>