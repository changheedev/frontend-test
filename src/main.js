import Vue from "vue";
import App from "./App.vue";

require("./style/style.less");

new Vue({
  el: "#app",
  render: h => h(App)
});
