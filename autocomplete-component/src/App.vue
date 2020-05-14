<template>
  <div id="app">
    <div style="margin:10% 25%;">
  <br>
<ejs-autocomplete :dataSource='dataItem' :fields='dataFields'
  placeholder="Select a exercise" popupWidth="250px"
  popupHeight="400px">
  </ejs-autocomplete>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
export default Vue.extend({
  data: function() {
return {
dataItem: new DataManager({
  url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
  adaptor: new webApiAdaptor,
  crossDomain: true
}),
 
dataFields:{value: 'Exercise'}
};

  }
});

  </script>

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
