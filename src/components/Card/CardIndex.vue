<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0.1);
  color: rgb(241, 241, 241);
  padding: 20px;
  border-radius: 12px;
}
</style>