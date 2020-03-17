<template>
  <div class="home">
    <img alt="Fitness App Logo" src="../assets/logo1.png" height="120" width="90">
    <h1 class="title is-1">Welcome to Simple Fitness-Tracker App</h1>
    <HelloWorld msg="Balenced mind in the  balenced body?"/>
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

<style>
.home{
  background-image: url("../assets/pushups.jpg");
   height:210px;
   weight:300px;
   background:cover;
}
</style>