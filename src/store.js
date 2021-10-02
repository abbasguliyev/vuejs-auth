import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    fbApiKey: "AIzaSyDQMl-g19k0njVLvq8p7vrayIGK4hr6Mcc",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    login({ commit, dispatch, state }, authData) {},
    logout({ commit, dispatch, state }) {},
  },
  getters: {},
});

export default store;
