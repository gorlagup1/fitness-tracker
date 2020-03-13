import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '../views/Activity.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import { CurrentUser } from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path:'/AboutUs', name:'AboutUs', component: AboutUs},
  { path: '/Login', name: 'Login', component: Login },
  { path: '/SignUp', name: 'SignUp', component: SignUp },
  { path: '/Activity', name: 'Activity', component: Activity },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.isSecret && !CurrentUser) next('/Login');
  else next();
});

export default router