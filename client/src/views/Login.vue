<template>
<form class ="container" @submit.prevent="login">
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" v-model="email">
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
    <input class="input" type="password" placeholder="Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Log in
    </button>
  </p>
</div>
</form>
</template>

<script>
import {Login } from "../models/Users";
export default {
  data(){
      return {
        email: '',
        password: '',
        error: ''
      }
  },
  methods: {
    login(){
      try{
          Login(this.email, this.password);
          //if no error display the log
          this.$router.push('/LoginPage');
      } catch (error){
          this.error = error;
      }
    }
  }
}
</script> 

<style>
.controler{
   background-image: url("../assets/photo.jpg");
  margin:0%;
  padding:0%;
  background:cover;
  color:black;
  left:0%;
  right:0%;
  top:0%;

}
</style>