<template>
  <div class="container">
    <template v-for="suplier in suplierList" :key="suplier.id">
      <Card class="card-suplier">
        <div class="card-suplier__item card-suplier__item--avatar">
          <img :src="suplier.avatar" alt="" class="card-suplier__avatar">
        </div>
        <div class="card-suplier__item card-suplier__item--flex">
          <span>{{ suplier.first_name }} {{ suplier.last_name }}</span>
          <span>{{ suplier.email }}</span>
        </div>
        <div class="card-suplier__item">
          <Button is-primary title="Send message">
            <v-icon name="co-telegram-plane" fill="white" />
          </Button>
        </div>
      </Card>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Card from '../Card/CardIndex.vue'
import supliersData from '@/data/supliers.json'
import Button from '@/components/Button/index.vue';
let suplierList = reactive(supliersData)

</script>

<style lang="scss" scoped>
.card-suplier {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  
  &__item {
    width: 100%;
    &:nth-child(2) {
      flex: 2;
    }
    &:last-child {
      text-align: right;
    }

    &--avatar {
      width:50px;
      background: white;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
    }

    &--flex {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
    }

    @media (min-width: 640px) {
      width: auto;
    }
  }

  &__fieldname {
    display: block;
    text-transform: capitalize;
  }

  &__avatar {
    width: 50px;
    height: 50px;
  }

  &:not(last-child) {
    margin-bottom: 20px;
  }
}
</style>
