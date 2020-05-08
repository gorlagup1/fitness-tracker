import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import {CurrentUser} from '../models/Users';
import Calorie from '../views/Calorie.vue';
import ContactMe from '../views/ContactMe.vue';
import Exercise from '../views/Exercise.vue';
import Login from '../views/Login.vue';
import LoginPage from '../views/LoginPage.vue';
import Logout from '../views/Logout.vue';
import Profile from '../views/Profile.vue';
import Register from '../views/Register.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
  path:"/login",
  name: "login",
  component:()=>
  import("../views/Login.vue")
},
{
  path:"/Signup",
  name:"Signup",
  component:()=>
  import("../views/Signup.vue")
},
{
  path:"/Exercise",
  name:"Exercise",
  component:()=>
  import("../views/Exercise.vue")

},
{
  path:"/Calorie",
  name:"Calorie",
  component:()=>
  import("../views/Calorie.vue")

},

{
  path:"/LoginPage",
  name: "LoginPage",
  component:()=>
  import("../views/LoginPage.vue")
},
{
  path:"/ContactMe",
  name:"ContactMe",
  component:()=>
  import("../views/ContactMe.vue")
},
{
  path:"/Logout",
  name:"Logout",
  component:()=>
  import("../views/Logout.vue")
},

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(( to,from,next)=>{
  if(to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});


export default router      
