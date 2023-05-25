<template>
  <header class="header-section">
    <div class="container">
      <div class="actions">
        <h2>{{ props.title }}</h2>
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<style scoped lang="scss">
.header-section {
  background: linear-gradient(to right bottom, #0c1921, #150a1f);
  padding: 80px 0;
  margin-bottom: 50px;
  font-size: 50px;
}
.actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

  h2 {
    flex: 3;
  }
}
</style>
