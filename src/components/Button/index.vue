<template>
  <button class="base-button" :class="{'base-button__primary' : isPrimary, 'base-button__flat': isFlat}">
    <slot></slot>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  isFlat: Boolean,
  isPrimary: Boolean,
})
</script>

<style lang="scss" scoped>
  .base-button {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: var(--radius);
    border: 1px solid transparent;
    min-height: 42px;
    justify-content: center;
    width: 100%;

    &:hover {
      opacity: .8;
    }

    &__primary {
      background-color: var(--dracula);
    }

    &__flat {
      border: 1px solid var(--city);
    }
  }
</style>