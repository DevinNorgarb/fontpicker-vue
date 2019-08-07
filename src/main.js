import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
/* eslint-disable */
Vue.use(VueMaterial);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
