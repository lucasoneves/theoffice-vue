<template>
  <main>
    <header class="header-section">
      <div class="container">
        <div class="actions">
          <h2>Supliers</h2>
          <Button class="actions__button">
            <v-icon name="bi-plus-circle" fill="white" width="22" height="22" />Add new
          </Button>
        </div>
      </div>
    </header>

    <Suspense>
      <SupliersList />
      <template #fallback>
        <h2>Carregando</h2>
      </template>
    </Suspense>
    
    <!-- <pre>{{ suplierList }}</pre> -->
  </main>
</template>

<script setup lang="ts">
import Button from '../components/Button/index.vue';
import SupliersList from '../components/SupliersList/index.vue';
</script>

<style lang="scss" scoped>

</style>
