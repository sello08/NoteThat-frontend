import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn'
import Home from '../views/Home'




  const routes = [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  ]

  const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
  })

  export default router
  

