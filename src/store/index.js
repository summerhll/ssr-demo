// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
//import { fetchItem } from './api'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新

        // return fetchItem(id).then(item => {
        //   commit('setItem', { id, item })
        // })

        return new Promise((resolve) => {
           setTimeout(() => {
             resolve(11)
             
           }, 100);

        }).then(id => {
          commit('setItem', { id })
          
        })
      }
    },
    mutations: {
      setItem (state, { id }) {
        Vue.set(state.items, 'id', id)
        debugger //eslint-disable-line
      }
    }
  })
}