import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import {CurrentUser} from '../models/Users';

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
  path:"/SignUp",
  name:"SignUp",
  component:()=>
  import("../views/SignUp.vue")
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
  path:"/Contact Me",
  name:"Contact Me",
  component:()=>
  import("../views/Contact Me.vue")
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
