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
import {mapState,mapMutation} from 'vuex'
import {onClick} from "../views/Calorie"
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
              this.$router.push('/Profile');
      }catch(error){
        this.error = error;
      }
      }
      }
    }
  
</script>

<style>
</style>

  