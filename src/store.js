import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    sources: []
  },
  mutations: {
    setItem(state, { payload, itemSource }) {
      state[itemSource] = payload;
    }
  },
  actions: {
    fetchItems({ commit }, { url, itemSource }) {
      axios
        .get(url)
        .then(response => {
          commit("setItem", {
            payload: response.data[itemSource],
            itemSource: itemSource
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
