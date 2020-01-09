import Axios from '../../common/axios'
import API from '../../common/api'

// 初始化数据
const state = {
  user: {
    name: '游客',
    token: ''
  }
}

// getters
const getters = {
  user: state => state.user
}

// actions: 异步方法
const actions = {
  async login ({ commit }, postData) {
    let user = await Axios.post(API.login, postData)
    commit('LOGIN', user)
  },
  async join ({ commit }, postData) {
    let user = await Axios.post(API.join, postData)
    commit('JOIN', user)
  },
  async userInfo ({ commit }) {
    let user = await Axios.get('http://localhost:3002/user/find?name=xiaomu')
    // let user = await Axios.post(API.userInfo)
    commit('USER_INFO', user)
  }
}

// mutations: 同步并且操作数据的方法
const mutations = {
  LOGIN (state, user) {
    state.user = user
    localStorage.setItem('token', user.token)
  },
  JOIN (state, user) {
    state.user = user
    localStorage.setItem('token', user.token)
  },
  USER_INFO (state, user) {
    state.user = user
  },
  LOGOUT () {
    state.user = {
      name: '游客',
      token: ''
    }
    localStorage.clear()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
