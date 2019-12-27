import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "//localhost:3000/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [{ closed: false, description: "Needs to get fixed pronto", title: "Bug on page", reportedBy: "Gerax", id: '12345', updatedAt: "12/27/2019" }],
    activeBug: {},
    notes: [],
    activeNotes: [{ content: "Is anyone working on this", bug: '12345', reportedBy: 'Admin', flagged: "pending" }]
  },
  mutations: {
    addBug(state, bug) {
      state.bugs.push(bug);
    },

    setAllBugs(state, data) {
      state.bugs = data;
    },

    setActiveBug(state, bug) {
      state.activeBug = bug;
    },

    addNote(state, note) {
      state.notes.push(note);
    },
    setActiveNotes(state, data) {
      state.activeNotes = data;
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },

    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },

    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data)
    },

    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },

    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setActiveNotes", res.data);
    }
  },
  modules: {
  }
})
