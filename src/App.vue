<script setup lang="ts">
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
router.push('/employees')

</script>

<template>
  <Header />
  
  <RouterView />

  <Footer />
</template>