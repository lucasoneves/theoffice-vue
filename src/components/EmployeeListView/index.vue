<script setup lang="ts"></script>

<template>
  <div class="view-list">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .view-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minMax(250px, 1fr));
    gap: 15px;
  }
</style>