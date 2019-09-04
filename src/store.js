import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: null
  },
  mutations: {
    setSearchTerm(state,term){
      state.searchTerm = term;
    }
  },
  actions: {
    setSearchTerm({commit},term){
      commit('setSearchTerm', term)
    },
  }
})
