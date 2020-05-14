<template>
  <div id="app">
    <div style="margin:10% 25%;">
  <br>
  <ejs-autocomplete>
  </ejs-autocomplete>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
export default Vue.extend({
  data: function() {
return {

};

  }
});

  </script>

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
