import Vue from "vue";
import App from "./App.vue";
import "vue-material/dist/vue-material.min.css";

/* eslint-disable */
import FontPicker from "font-picker-vue";

Vue.use(FontPicker);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
