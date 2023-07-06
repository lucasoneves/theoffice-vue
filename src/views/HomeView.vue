<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { config } from '../config';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(config.firebaseConfig);
const auth = getAuth(firebaseApp);

async function signIn() {
  const result = await signInAnonymously(auth)
  result.user
  router.push('/employees')
}


const router = useRouter();

onMounted(async () => {
  await signIn();
})
</script>

<template>
  <main>
  </main>
</template>