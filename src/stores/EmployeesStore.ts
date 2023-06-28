import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employeeStore", {
  state: () => ({
    employeesData: ref([])
  }),
  getters: {
    
  },
  actions: {
    addEmployee(payload) {
      this.employeesData.unshift(payload)
    },
    addEmployeeList(payload) {
      this.employeesData = payload
    }
  }
})