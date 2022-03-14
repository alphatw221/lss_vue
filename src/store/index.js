import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0,
      accessToken: '',
      isAdmin: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    set_access_token (state, accessToken) {
      state.accessToken = accessToken;    
    }
  }
})

export default store