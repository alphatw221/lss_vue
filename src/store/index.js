import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            role: 'seller',
            count: 0,
            isAdmin: false
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
    }
})

export default store