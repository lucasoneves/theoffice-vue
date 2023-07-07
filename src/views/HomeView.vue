<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { signInAnonymously } from 'firebase/auth';
import initialize from '../firebase';

const { firebaseApp, firestore, auth } = initialize();


</script>

<template>
  <main>
  </main>
</template>