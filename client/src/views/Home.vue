<template>
  <div class="home">
   
    <img alt="Vue logo" src="../assets/logo.png" height="256" width=
    <h1 class="title is"> Welcome To Your Simple Fittness Center App </h1>
    <HelloWorld msg="Welcome to simple fitness centre  App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>