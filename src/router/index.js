import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/guest/LoginView.vue'),
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/guest/RegistrationView.vue'),
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/guest/IndexView.vue'),
    },
    {
      path: '/communities',
      name: 'Communities',
      component: () => import('@/views/guest/CommunitiesView.vue'),
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: () => import('@/views/guest/AssignmentsView.vue'),
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('@/views/guest/ChatView.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/guest/ProfileView.vue'),
    },
    {
      path: '/studentsEnrollemnt',
      name: 'Student_enrollment',
      component: () => import('@/views/guest/Student_enrollmentView.vue'),
    },
    {
      path: '/tailwindTemplate',
      name: 'TailwindTemplate',
      component: () => import('@/views/guest/Tailwind_templateView.vue'),
    },
  ],
})

export default router
