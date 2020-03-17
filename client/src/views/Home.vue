<template>
  <div class="home">
    
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

</style>