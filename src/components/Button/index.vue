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
    padding: 10px 20px;
    border-radius: var(--radius);
    border: 1px solid transparent;
    min-height: 42px;
    justify-content: center;
    cursor: pointer;
    width: 100%;

    &:hover {
      opacity: .8;
    }

    &__primary {
      background-color: teal;
      color: #fff;
    }

    &__flat {
      border: 1px solid var(--city);
    }

    @media (min-width: 640px) {
      width: auto;
    }
  }
</style>