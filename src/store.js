import Vue from "vue";
import Vuex from "vuex";
import { testRef } from "./firebase.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "Hey"
  }
});
