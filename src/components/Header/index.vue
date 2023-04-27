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
          <li><a href="">Home</a></li>
          <li><a href="">Employees</a></li>
          <li><a href="">Fornecedores</a></li>
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
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.main-nav {
  &__list {
    display: flex;
    gap: 10px;

    a {
      text-decoration: none;
      color: var(--city)
    }
  }
}
</style>