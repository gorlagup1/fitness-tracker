<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">


<div class="navbar-brand">
  <figure class="image is-128x128">
    <img class="is-rounded" src="../assets/logo1.png">
    </figure>
</div>
  <div :class="{ 'is-active':isOpen }" class="navbar-menu">

    <div class="navbar-start">

      <router-link to="/" class="navbar-item is-large has-text-weight-bold" active-class="is-current" exact>Home</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
      <router-link to="About" class="navbar-item is-large has-text-weight-bold" active-class="is-current" exact>About</router-link>
      </div>     

<div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-item has-text-weight-bold" active-class="is-current">Contact Me</div>
      
        <div class="navbar-dropdown">
             <router-link to="/Contact Me" class="navbar-item has-text-weight-bold">Contact Details</router-link>
          <router-link to="/Login" class="navbar-item has-text-weight-bold">Login</router-link>
          <hr class="navbar-divider">
          <router-link to="/Sign-Up" class="navbar-item has-text-weight-bold">Sign-Up</router-link>
        </div>
      </div>

  <div class="navbar-item has-dropdown is-hoverable">
      <div class="navbar-item has-text-weight-bold is-hoverble" active-class="is-current">More</div>
      
        <div class="navbar-dropdown">
          <router-link to="About" class="navbar-item has-text-weight-bold">About </router-link>
          <hr class="navbar-divider">
          <router-link to="Calorie" class="navbar-item has-text-weight-bold">Calorie</router-link>
          <hr class="navbar-divider">
          <router-link to="Logout" class="navbar-item has-text-weight-bold">Logout</router-link>
          <hr class="navbar-divider">
        </div>
      </div>
      </div> 
        

         <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Sign-Up" class="button is-primary has-text-weight-bold">Sign up</router-link>
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
.navbar-brand {
    color: #08b6ad;
  }
</style>