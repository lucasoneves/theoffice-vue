<script setup lang="ts">
defineProps({
  name: String,
  role: String,
  email: String,
  id: String,
  avatar: String,
  handleFavorite: Function,
  handleUnfavorite: Function,
  isFavorite: Boolean
})
</script>

<template>
  <div class="card">
    <img :src="avatar" class="card__avatar" />
    <h2>{{ name }}</h2>
    <span>{{ role }}</span>
    <div class="card__actions">
      <a :href="'mailto:' + email" class="card__email">{{ email }}</a>
      <button @click="handleFavorite" v-if="!isFavorite"> <v-icon name="md-favoriteborder" fill="white" /></button>
      <button @click="handleUnfavorite" v-else> <v-icon name="md-favorite-sharp" fill="#9b2f2f" /></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: rgba(255, 255, 255, 0.1);
  color: rgb(241, 241, 241);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &__avatar {
    border-radius: 12px;
    max-width: 280px;
    width: 100%;
    height: 280px;
    object-fit: cover;
    background: #9f9f9f;
  }

  &__email {
    border-radius: 12px;
    padding: 5px 20px;
    text-decoration: none;
    color: white;
    background-color: teal;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
}
</style>
