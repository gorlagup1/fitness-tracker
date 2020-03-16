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

  background-image: url("./assets/photo.jpg");
  padding: 500px 100px;
  margin: 100px;
  background-repeat:no-repeat;
  background-size:cover;
  
}
 

</style>