<template>
  <div id="app">
    <div style="margin:10% 25%;">
  <br>
<ejs-autocomplete :dataSource='dataItem' :fields='dataFields'
  placeholder="Select a name" popupWidth="250px"
  popupHeight="400px" :query='dataQuery'>
  </ejs-autocomplete>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor,
Query } from '@syncfusion/ej2-data';

export default Vue.extend({
  data: function() {
return {
dataItem: new DataManager({
  url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
  adaptor: new webApiAdaptor,
  crossDomain: true
}),
 
dataFields:{value: 'FirstName'},
dataQuery: new Query().select(['FirstName', ' EmployeeID']).take(9).requiresCount(),
};

  }
});

  </script>

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
