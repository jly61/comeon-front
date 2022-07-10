import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pv: 0
  },
  mutations: {
    setPv (state, payload) {
      state.pv = payload
    }
  },
  actions: {
    setPvAsync ({ commit }, payload) {
      commit('setPv', payload)
    }
  }
})
