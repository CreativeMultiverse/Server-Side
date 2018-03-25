import "./firebase";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueFire from "vuefire";
import BootstrapVue from "bootstrap-vue";
import { store } from "./store.js";
import { router } from "./router.js";

// Global Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "izitoast/dist/css/iziToast.min.css";

// Shitty ones
import "./assets/css/animate.css";
import "./assets/css/c3.min.css";
import "./assets/css/morris.css";
import "./assets/css/perfect-scrollbar.min.css";
// import "./assets/css/spinners.css";
import "./assets/css/style.css";
import "./assets/css/colors/default.css";
// import "./assets/css/icons/font-awesome/css/font-awesome.css";
import "./assets/css/pages/bootstrap-switch.css";
import "./assets/css/pages/breadcrumb-page.css";
import "./assets/css/pages/card-page.css";
import "./assets/css/pages/chat-app-page.css";
import "./assets/css/pages/common.css";
import "./assets/css/pages/contact-app-page.css";
import "./assets/css/pages/dashboard1.css";
import "./assets/css/pages/easy-pie-chart.css";

//Global Js
import "./assets/js/dashboard1.js";
// import "./assets/js/flot-data.js";
import "./assets/js/jquery.slimscroll.js";
import "./assets/js/perfect-scrollbar.jquery.js";
import "./assets/js/raphael-min.js";
import "./assets/js/sidebarmenu.js";
import "./assets/js/waves.js";
import "./assets/js/popper.min.js";
import "./assets/js/morris.min.js";
// import "./assets/js/d3.min.js";
// import "./assets/js/c3.min.js";
import "./assets/js/custom.js";

Vue.use(VueFire);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
});
