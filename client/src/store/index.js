import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "//localhost:3000/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],
    activeNotes: []
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
    setNotesByBugId(state, data) {
      state.activeNotes = data;
    },
    addActiveNote(state, note) {
      state.activeNotes.push(note)
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }, num) {
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
      commit("setActiveBug", res.data);
    },

    async editBug({ commit, dispatch }, { id, reportedBy, title, description }) {
      let res = await _api.put("bugs/" + id, { reportedBy, title, description });
      dispatch("getBugById", id);
    },

    async closeBug({ commit, dispatch }, id) {
      let res = await _api.delete("bugs/" + id);
      dispatch("getAllBugs");
      dispatch("getBugById", id);
    },

    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
      commit("addActiveNote", res.data);
    },

    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes")
      commit("setNotesByBugId", res.data);
    },

    async deleteNote({ commit, dispatch }, ids) {
      let res = await _api.delete("notes/" + ids.noteId);
      dispatch("getNotesByBugId", ids.bugId)
    }
  },
  modules: {
  }
})
