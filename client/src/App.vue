<template>
  <div id="app">
  <MyNav></MyNav>
       <router-view/>
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