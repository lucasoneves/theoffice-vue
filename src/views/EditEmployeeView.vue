<template>
  <div class="container">
    editar employee
    <pre>{{ params.id }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const params = useRoute().params
</script>

<style scoped>

</style>