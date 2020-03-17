<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
       <img src="../assets/exercise.jpg" width="250" height="190" display:none>
    </a>

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">


      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
      <router-link to="/exercise" class="navbar-item" active-class="is-current">Exercise</router-link>
      <router-link to="/Signin" class="navbar-item" active-class="is-current">Signin</router-link>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More Options
        </a>

        <div class="navbar-dropdown">
          <router-link to="/Contact Me" class="navbar-item" active-class="is-current" exact>Contact Me</router-link>
          <router-link to="/Login" class="navbar-item" active-class="is-current" exact>Login</router-link>
          <router-link to="/Sign-Up" class="navbar-item" active-class="is-current" exact>Sign-Up</router-link>
         
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/Sign-Up">
            <strong>Sign-up</strong>
          </a>
          <a class="button is-light" href="/Login">
           <strong> Login </strong>
          </a>
          <a class="button is-primary" href="/Signin">
          <strong>Signin</strong>
          </a>
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
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
</style>