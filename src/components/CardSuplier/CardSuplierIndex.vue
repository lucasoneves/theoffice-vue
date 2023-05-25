<template>
  <div class="card-suplier__item">
    <strong class="card-suplier__fieldname">{{fiedlType}}:</strong>
    <span>{{ props.fiedlType }}</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    fiedlType: String
  })
</script>

<style lang="scss" scoped>

</style>