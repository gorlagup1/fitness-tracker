<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/Sign-Up">Sign-Up</router-link>|
      <router-link to="/Exercise">Exercise</router-link>|
      <router-link to="/Contact Me">Contact Me</router-link>
      
   
      
      
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
 padding:200px 100px;
 margin:90px;
 right:0px;
 left:0px;
 font-size: 20px;
 background: url("./assets/fittness.png");
 background-repeat: no-repeat;
 background-size: cover;
 
 
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:peru;
    font-size: 30px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
