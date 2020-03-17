import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";



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
  path:"/Sign-Up",
  name:"Sign-Up",
  component:()=>
  import("../views/Sign-Up.vue")
},

{
  path:"/Exercise",
  name: "Exercise",
  component:()=>
  import("../views/Exercise.vue")
},
{
  path:"/Contact Me",
  name:"Contact Me",
  component:()=>
  import("../views/Contact Me.vue")
},
{
  path:"/Signin",
  name:"Signin",
  component:()=>
  import("../views/Signin.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;      
