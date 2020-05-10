<template>
<form class ="container" @submit.prevent="signup">
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
      Sign up
    </button>
  </p>
</div>
</form>
</template>

<script>
import { Signup } from "../models/Signup";
export default {
  data(){
      return {
        email: '',
        password: '',
        error: ''
      }
  },
  methods: {
    async signup(){
      try{
        
                console.log(this.email);
                console.log(this.password);
                if(!this.email||!this.password){
                  alert("All * Fields are mandatory");
                }else{
                  await Signup(this.email,this.password);
                  console.log("coming here");
                  alert("Your registration is succeessful please login");
                  this.$router.push('/Login');
                }
          this.$router.push('/Login');
      } catch (error){
          this.error = error;
      }
    }
  }
}
</script>

<style>
</style>

  