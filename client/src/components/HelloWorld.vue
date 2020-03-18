<template>
<nav class="navbar hero" role="navigation" aria-label="main nav">


<div class="navbar">
  <figure class="image is-128x128">
    <img class="is-rounded" src="../assets/logo1.png">
    </figure>
</div>
  <div :class="{ 'is-active':isOpen }" class="navbar-menu">

    <div class="navbar-start">

      <router-link to="/" class="navbar-item is-large has-text-weight-bold" active-class="is-current" exact>Home</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-item has-text-weight-bold" >About</div>
      </div>     

<div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-item has-text-weight-bold" active-class="is-current">Sign-Up</div>
      
        <div class="navbar-dropdown">
          <router-link to="/Exercise" class="navbar-item has-text-weight-bold">Exercise </router-link>
          <hr class="navbar-divider">
          <router-link to="/Login" class="navbar-item has-text-weight-bold">Login</router-link>
          <hr class="navbar-divider">
          <router-link to="/Sign-Up" class="navbar-item has-text-weight-bold">Sign-Up</router-link>
        </div>
      </div>

  <div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-item has-text-weight-bold" active-class="is-current">Exercise</div>
      
        <div class="navbar-dropdown">
          <router-link to="/Call" class="navbar-item has-text-weight-bold">Contact Me </router-link>
          <hr class="navbar-divider">
          <router-link to="/Chat" class="navbar-item has-text-weight-bold">Login</router-link>
          <hr class="navbar-divider">
          <router-link to="/Email" class="navbar-item has-text-weight-bold">About</router-link>
          <hr class="navbar-divider">
          <router-link to="/Calorie" class="navbar-item has-text-weight-bold">Calorie</router-link>
        </div>
      </div>
      </div>   

         <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/SignUp" class="button is-primary has-text-weight-bold">Sign up</router-link>
          <router-link to="/Login" class="button is-light has-text-weight-bold">Login</router-link>
        </div>
      </div>
    </div>
</div> 

</nav>



</template>

<script>
export default {
  data: ()=>({
    isOpen: false
  })
}
</script>

<style>
navbar {
    color: #08b6ad;
  }
</style>