<template>
  <main>
    <HeroSectionIndex title="Supliers">
      <Button class="actions__button" is-primary title="Add New">
        <v-icon name="bi-plus-circle" fill="white" width="22" height="22" />
      </Button>
    </HeroSectionIndex>

    <Suspense>
      <SuplierListIndex />
      <template #fallback>
        <h2>Carregando</h2>
      </template>
    </Suspense>
    
    <!-- <pre>{{ suplierList }}</pre> -->
  </main>
</template>

<script setup lang="ts">
import Button from '../components/Button/index.vue';
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue';
import SuplierListIndex from '@/components/SupliersList/SuplierListIndex.vue';
</script>

<style lang="scss" scoped>

</style>
