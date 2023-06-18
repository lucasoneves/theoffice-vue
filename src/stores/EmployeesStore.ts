import { defineStore } from "pinia";
import employees from "@/data/employees";

export const useEmployeeStore = defineStore("employeeStore", {
  state: () => ({
    employeesData: employees
  }),
  getters: {
    
  },
  actions: {
    addEmployeeList(payload: any) {
      this.employeesData.push(payload)
    }
  }
})