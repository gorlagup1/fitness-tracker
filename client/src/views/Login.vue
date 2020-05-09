<template>
  <form class="container form-down" @submit.prevent="login">
      
        <div class="columns hero is-primary">
            <div class="column is-full title is-5 is-bold">
               <p>Please Login with your credentials</p>
             </div>
      </div>  
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email address" v-model="email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" >
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success is-medium" >
            Login
            </button>
        </p>
        </div>
  </form>
</template>
<script>
import { Login } from "../models/Users";

import {onClick} from "../views/Exercise"
export default {
    data(){
        return {
            email:'',
            error: ''
        }
    },
    methods: {
        async login(){
            try {
                console.log(this.email);
                const user=await Login(this.email);
                console.log("coimjhggfff");
                console.log(user);
                if(user!=null){
                   this.$store.state.user=this.email;
                   this.$router.push('/Exercise');
                   document.getElementsByTagName("li")[0].className="is-active";
                }else{
                    alert("Sorry,You don't have the account to login,Please Sign up");
                    this.$router.push('/SignUp');
                }
                console.log("outside is"+document.getElementsByTagName("a"));
            } catch (error) {
                this.error = error;
            }
            console.log("outside is"+document);
        }
    }
}
</script>
<style scoped>
  .form-down{
      margin-top: 20px;
  }
</style>
