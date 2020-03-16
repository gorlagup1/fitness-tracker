<template>
  <div id="app">
    <div id ="nav">
      <router-link to="/Sign-Up">Sign-Up</router-link>
  </div>
       <router-view/>Nav>
  </div>
</template>
<script>
import MyNav from "@/components/HelloWorld.vue"
export default {
  components: {
    MyNav
  }
  
}
</script>


<style lang="scss">
body{
  background-color:lightcyan;
  background-image: url("./assets/fittness.png");
  
}
 

</style>