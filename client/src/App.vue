<template>
  <div id="app">
    <MyNav> </MyNav>
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
.navbar {
  
  display:block;
  background-color: darkorange;;
}
  
</style>