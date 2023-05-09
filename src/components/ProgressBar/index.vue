<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
defineProps({
  total: Number
})
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__filled" :class="{ 'completed': total == 100 }" :style="{ width: total + '%' }"></div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  background: rgb(212, 212, 212);
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 10px;

  &__filled {
    height: inherit;
    background: linear-gradient(45deg, #96c68e, #10716d);
    border-radius: 10px 0 0 10px;
  }

  .completed {
    border-radius: 10px;
  }
}
</style>