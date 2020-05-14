<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Autocomplete msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Autocomplete from '@/components/Autocomplete.vue'

export default {
  name: 'Home',
  components: {
    Autocomplete
  }
}
</script>
