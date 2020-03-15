
<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link exact-active-class="active" class="navbar-item" to="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
        </router-link>

        <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isOpen }">
        <div class="navbar-start">

        <router-link exact-active-class="active" class="navbar-item" to="/about">
            <i class="fab fa-vuejs fa-pull-left"></i>
            About
        </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
      
      <a class="navbar-link">
        Login
      </a>

      <div class="navbar-dropdown">
       <router-link exact-active-class="active" class="navbar-item" to="/log">
            <i class="fab fa-vuejs fa-pull-left"></i>
          Login
        </router-link>
       <router-link exact-active-class="active" class="navbar-item" to="/adminsamples">
            <i class="fab fa-vuejs fa-pull-left"></i>
          Sign-Up
        </router-link>
      </div>
    </div>

  <div class="navbar-item has-dropdown is-hoverable">
  
  <a class="navbar-link">
      Exercise
    </a>

    <div class="navbar-dropdown">
       <router-link exact-active-class="active" class="navbar-item" to="/contact">
            <i class="fab fa-vuejs fa-pull-left"></i>
        Contact
      </router-link>
      <hr class="navbar-divider">
       <router-link exact-active-class="active" class="navbar-item" to="/report">
            <i class="fab fa-vuejs fa-pull-left"></i>
        Report an issue
      </router-link>
    </div>
  </div>
</div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <router-link exact-active-class="active" class="navbar-item" to="/newuser">
          <a class="button is-primary">
            <strong>New User</strong>
          </a>
        </router-link>
        <router-link exact-active-class="active" class="navbar-item" to="/login">
          <a class="button is-primary">
            <strong>Log in</strong>
          </a>
        </router-link>
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
  }),
  methods:{
    isTest(){
      console.log('Anything')
    }
  }
}
</script>

<style>
  .is-current {
    list-style:none;
    background:#663366;
    font-weight: bold;
    text-align: center;
    padding:0;
    margin:0;
    display:inline-block;
  }
  .navbar {
    font: 1em sans-serif;
    text-align: center;
    font-weight: 500;
    color: blue;
    display:inline-block;
    list-style:none;
  }
</style>