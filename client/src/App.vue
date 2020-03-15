<template>
  <div id="app">
  
     <MyNav>
       </MyNav>
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
  color:violet;
  display:block;
 
}
</style>