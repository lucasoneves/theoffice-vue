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
    <div class="container">
      <template v-for="suplier in suplierList" :key="suplier.id">
        <Card class="card-suplier">
          <div class="card-suplier__item">
            <strong class="card-suplier__fieldname">Name:</strong>
            <span>{{ suplier.name }}</span>
          </div>
          <div class="card-suplier__item">
            <strong class="card-suplier__fieldname">email:</strong>
            <span>{{ suplier.email }}</span>
          </div>
          <div class="card-suplier__item">
            <strong class="card-suplier__fieldname">phone:</strong>
            <span>{{ suplier.phone }}</span>
          </div>
          <div class="card-suplier__item">
            <strong class="card-suplier__fieldname">website:</strong>
            <span>{{ suplier.website }}</span>
          </div>
          <div class="card-suplier__item">
            <button>Send message</button>
          </div>
        </Card>
      </template>
    </div>
    <!-- <pre>{{ suplierList }}</pre> -->
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import Card from '../components/Card/CardIndex.vue'

const suplierList = ref([])

onMounted(() => {
  getUsers()
})
const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then((data) =>
      data.json()
    )
    suplierList.value = response
  } catch (error) {
    console.error(error)
  }
}
</script>

<style lang="scss" scoped>
.card-suplier {
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(145px, 1fr));
  align-items: center;
  gap: 20px;

  &__item {
    &:last-child {
      text-align: right;
    }
  }

  &__fieldname {
    display: block;
    text-transform: capitalize;
  }

  &:not(last-child) {
    margin-bottom: 20px;
  }
}
</style>
