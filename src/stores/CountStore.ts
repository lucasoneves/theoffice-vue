import { defineStore } from "pinia";

export const useCountStore = defineStore('CountStore', {
  // Data
  state: () => ({
    count: 0
  }),
  // Computed
  getters: {

  },
  // Methods
  actions: {
    increment() {
      this.count++;
    }
  }
})