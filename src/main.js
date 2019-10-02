import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkRdaxj9auELI1rPX8dau_IapGzMB9taU",
  authDomain: "v-news-8696d.firebaseapp.com",
  databaseURL: "https://v-news-8696d.firebaseio.com",
  projectId: "v-news-8696d",
  storageBucket: "",
  messagingSenderId: "642033652981",
  appId: "1:642033652981:web:1ba50db39952f2416d61bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
