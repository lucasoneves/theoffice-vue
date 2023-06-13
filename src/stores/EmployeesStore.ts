import { defineStore } from "pinia";
import type EmployeeType from "@/utils/types/employeeTypes";
import employees from "@/data/employees";

export const useEmployeeStore = defineStore("employeeStore", {
  state: () => ({
    employeesData: <EmployeeType[]>(employees)
  }),
  getters: {
    
  },
  actions: {
    addEmployeeList(list: EmployeeType[]) {
      this.employeesData = <EmployeeType[]>(list)
    }
  }
})