import Vuex from 'vuex';

export default () => (new Vuex.Store({
  state: {
    items: [],
    users: {},
    userItems: {}
  },
  getters: {
    items: (state) => state.items,
  },
  mutations: {
    setItems(state, {
      items
    }) {
      state.items = items
    },
  },
  actions: {
    async fetchItems({
      commit
    }) {
      const items = await this.$axios.$get(`https://qiita.com/api/v2/items?query=tag:nuxt.js`)
      commit('setItems', {
        items
      })
    }
  }
}))
