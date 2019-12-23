import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "//localhost:3000/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
    addBug(state, bug) {
      state.bugs.push(bug);
    },

    setAllBugs(state, data) {
      state.bugs = data;
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },

    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data)
    }
  },
  modules: {
  }
})
