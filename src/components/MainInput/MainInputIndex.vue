<template>
  <input
    class="main-input"
    :type="inputType"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    v-model="value"
    v-on:change="$emit('input', value)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  inputType: String,
  name: String,
  placeholder: String,
  value: String || Number
})

const value = ref('')

</script>

<style lang="scss" scoped>
.main-input {
  padding: 10px 20px;
  border-radius: 12px;
  border-color: #d8d8d8;
  color: black;
  border: 0;
  outline: 0;
  height: 45px;
  font-size: 14px;
  background: white;
}
</style>
