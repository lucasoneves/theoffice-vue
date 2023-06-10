<template>
  <main>
    <HeroSectionIndex title="Employees">
      <ButtonAddNewIndex action="add-employee" @add-employee="goToAddEmployee" />
    </HeroSectionIndex>
    <div class="edit-employee">
      <div class="container">
        <h2>{{  userSelected?.name }}</h2>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import employeesData from '@/data/employees.json'
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue';
import ButtonAddNewIndex from '@/components/ButtonAddNew/ButtonAddNewIndex.vue';

const params = useRoute().params

const router = useRouter();

const userSelected = employeesData.find((user) => user.id === params.id)

function goToAddEmployee() {
  router.push('/employees/add')
}

</script>

<style scoped>

</style>