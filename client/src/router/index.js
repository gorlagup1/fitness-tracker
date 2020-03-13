import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import AboutUs from '../views/AboutUs.vue'
import Community from '../views/Community.vue'

import Track from '../views/Track.vue'
import Activity from '../views/Activity.vue'
import Log from '../views/Log.vue'
import Share from '../views/Share.vue'

import UserSupport from '../views/UserSupport.vue'
import Call from '../views/Call.vue'
import Chat from '../views/Chat.vue'
import Email from '../views/Email.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import { CurrentUser } from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/Community', name: 'Community', component: Community },
  { path: '/Track', name: 'Track', component: Track},
  { path: '/Activity', name: 'Activity', component: Activity, meta: { isSecret: true } },
  { path: '/Log', name: 'Log', component: Log },
  { path: '/Share', name: 'Share', component: Share },
  { path: '/UserSupport', name: 'UserSupport', component: UserSupport },
  { path: '/Call', name: 'Call', component: Call },
  { path: '/Chat', name: 'Chat', component: Chat },
  { path: '/Email', name: 'Email', component: Email },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/SignUp', name: 'SignUp', component: SignUp },

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