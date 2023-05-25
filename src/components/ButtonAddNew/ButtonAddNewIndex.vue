<template>
  <Button class="actions__button" is-primary title="Add New" @click.prevent="$emit(props.action)">
    <v-icon name="bi-plus-circle" fill="white" width="22" height="22" />
  </Button>
</template>

<script setup lang="ts">
  import Button from '@/components/Button/index.vue';

  const props = defineProps({
    action: {
      type: String,
      default: "add-new"
    }
  })
</script>

<style scoped>

</style>