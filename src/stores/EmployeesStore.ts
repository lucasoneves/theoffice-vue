import { defineStore } from "pinia";
import type EmployeeType from "@/utils/types/employeeTypes";

export const employeeStore = defineStore("employeeStore", {
  state: () => ({
    employeesList: <EmployeeType[]>[]
  }),
  getters: {

  },
  actions: {
    addEmployeeList(list: EmployeeType[]) {
      this.employeesList = <EmployeeType[]>(list)
    }
  }
})