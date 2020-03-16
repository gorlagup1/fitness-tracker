<template>
  <form class="container" @submit.prevent="Sign">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="UserName" placeholder="UserName" v-model="UserName" >
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
            <button class="button is-success" v-on:click="Sign">
            Sign-Up
            </button>
        </p>
        </div>
  </form>
</template>

<script>
  import { SignUp } from "../models/Sign";

export default {
  data(){
    return{
      email:'',
      passsword:'',
      error:''
    }
  },
  methods:{
          Sign(){
        try {
          Sign-Up(this.Username, this.password);
          this.$router.push('/Exercise');
        } catch (error) {
          this.error = error;
        }
      }
    }
  }; 
</script>

<style>
    
</style>