import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('../views/EmployeeView.vue')
    },
    {
      path: '/employees/edit/:id',
      name: 'employeeEdit',
      component: () => import('../views/EditEmployeeView.vue')
    },
    {
      path: '/supliers',
      name: 'supliers',
      component: () => import('../views/SupliersView.vue')
    },
    {
      path: '/supliers',
      name: 'supliersEdit',
      component: () => import('../views/SupliersView.vue')
    }
  ]
})

export default router
