import { defineStore } from "pinia";
import { ref } from "vue";

type EmployeePayload = {
  active: boolean;
  avatar: string;
  email: string;
  role: string;
  name: string;
  id: string;
  goal: {
    current: number;
    target: number;
  }
}

export const useEmployeeStore = defineStore("employeeStore", {
  state: () => ({
    employeesData: ref([])
  }),
  getters: {
    
  },
  actions: {
    addEmployee(payload: EmployeePayload) {
      this.employeesData.unshift(payload)
    },
    addEmployeeList(payload: EmployeePayload[]) {
      this.employeesData = payload
    }
  }
})