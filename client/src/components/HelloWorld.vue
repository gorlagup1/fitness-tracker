<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item router-link-active" href="/">
            <i class="fas fa-home fa-pull-left"></i>
            Home
            </a>
       

        <a class="navbar-burger burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" >
        <div class="navbar-start">
<a class="navbar-item" href="/Login">
            <i class="fab fa-vuejs fa-pull-left"></i>
            Login
        </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item" href="/About">
     
            <i class="fab fa-vuejs fa-pull-left"></i>
            About
            </a>
       <div class="navbar-item has-dropdown is-hoverable">
         <a class="navbar-link">
           Exercise
           </a>
    <div class="navbar-dropdown">
      <a class="navbar-item" href="/Contact Me">
      <i class="fab fa-vuejs fa-pull-left"></i>
      Contact
      </a>
    <hr class="navbar-divider">
    <a class="navbar-item" href="/Sign-Up">
    <i class="fab fa-vuejs fa-pull-left">
      </i>
      Sign-Up
      </a>
      </div>
      </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="navbar-item" href="/newuser">
            <a class="button is-primary">
              <strong> New User </strong>
              </a>
              </a>
              </div>
              </div>
              </div>
              </nav>
              <!---->
              </div>
              <!--built files will be auto injected-->

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
   color:black;
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