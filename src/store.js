import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將API取得的currentUser覆蓋掉 Vuex.state 的 currentUser
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        commit('setCurrentUser', {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })
        return true
      } catch (err) {
        commit('revokeAuthentication')
        return false
      }
    }
  }
})
