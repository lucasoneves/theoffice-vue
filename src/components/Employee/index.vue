<script setup lang="ts">
import Button from '../Button/index.vue'
defineProps({
  user: Object,
  isFavorite: Boolean,
  percentage: String
})

defineEmits(['handle-favorite', 'handle-unfavorite', 'edit-employee'])
</script>

<template>
  <div class="card">
    <img
      :src="
        user?.avatar || 'https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png'
      "
      class="card__avatar"
    />

    <h2>{{ user?.name }}</h2>
    <span>{{ user?.role }}</span>
    <span>Hit target: {{ percentage }}</span>
    <div class="card__actions">
      <a :href="'mailto:' + user?.email" class="card__email">{{ user?.email }}</a>
    </div>
    <footer class="card__footer">
      <Button
        isFlat
        :title="'Favorite'"
        @click="$emit('handle-favorite', { name: user?.name, id: user?.id })"
        v-if="!isFavorite"
      >
        <v-icon name="md-favoriteborder" fill="white" />
      </Button>
      <Button
        :title="'Unfavorite'"
        @click="$emit('handle-unfavorite', { name: user?.name, id: user?.id })"
        v-else
      >
        <v-icon name="md-favorite-sharp" fill="#9b2f2f" />
      </Button>
      <Button :title="'Edit'" :is-primary="true" @click="$emit('edit-employee', { name: user?.name, id: user?.id })">
        <v-icon name="hi-pencil-alt" fill="white" />
      </Button>
    </footer>
  </div>
</template>

<style scoped lang="scss">
button {
  color: white;
  cursor: pointer;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  color: rgb(241, 241, 241);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h2 {
    font-size: 20px;
    font-weight: bold;
  }

  &__footer {
    display: flex;
    width: 100%;
    gap: 15px;
    margin-top: 20px;
    justify-content: space-between;
  }

  &__avatar {
    border-radius: 12px;
    width: 100%;
    height: 280px;
    object-fit: cover;
    background: #9f9f9f;

    @media (min-width: 768px) {
      max-width: 280px;
    }
  }

  &__email {
    border-radius: 12px;
    padding: 5px 20px;
    text-decoration: none;
    color: white;
    background-color: teal;
    width: 100%;
    text-align: center;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
  }
}
</style>
