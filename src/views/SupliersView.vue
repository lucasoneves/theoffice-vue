<template>
  <main>
    <HeroSectionIndex title="Supliers">
      <ButtonAddNewIndex action="add-suplier" />
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
import ButtonAddNewIndex from '@/components/ButtonAddNew/ButtonAddNewIndex.vue';
import HeroSectionIndex from '@/components/HeroSection/HeroSectionIndex.vue';
import SuplierListIndex from '@/components/SupliersList/SuplierListIndex.vue';
</script>

<style lang="scss" scoped>

</style>
