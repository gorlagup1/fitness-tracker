<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/login">Login1-up</router-link>|
      <router-link to="/Exercise">Exercise</router-link>
      
     
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
  background-image: url(./assets/man.jpg);
 padding:0px;
 margin:0px;
 right:0px;
 left:0px;
 font-size: 20px;
 
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
