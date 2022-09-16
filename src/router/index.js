import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Home from '../views/HomePage'
import OpeningPage from '../components/OpeningPage'


  const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes : [
      { path: '/signin',name:'SignIn' , component: SignIn},
      { path: '/signup',name:'SignUp' , component: SignUp},
      { path: '/homepage',name:'Home' , component: Home},
      { path: '/',name:'OpeningPage' , component: OpeningPage},
  ]
  })

  export default router
  

