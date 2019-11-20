import Vue from 'vue'
import Vuex from 'vuex'

import productModule from './product'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 1,
    users: [
      {
        firstname: 'nook',
        lastname: 'ththth',
        id: 1111
      },
      {
        firstname: 'thththth',
        lastname: 'thomnh',
        id: 2222
      },
      {
        firstname: 'nookteeee',
        lastname: 'yayayayy',
        id: 3333
      }
    ]
  },
  mutations: {
    addCount (state) {
      state.count++
    },
    addUser (state, user) {
      state.users.push(user)
    }
  },
  modules:{
    productModule: productModule
  }
})
