<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/images/logoipsum-226.svg'
const logoImage = ref({ logo: logo })
</script>

<template>
  <header class="header">
    <div class="container">
      <img :src=logoImage.logo alt="Company Logo">
      <nav class="main-nav">
        <ul class="main-nav__list">
          <li><router-link to="/">Employees</router-link></li>
          <li><router-link to="/supliers" @click="$emit('show-supliers')">Supliers</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 60px 0;
}

.container {

  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 10px;
    justify-content: space-between;
  }
}

.main-nav {
  &__list {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      color: var(--city)
    }
  }
}
</style>