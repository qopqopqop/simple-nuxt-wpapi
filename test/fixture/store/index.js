export default {
  actions: {
    nuxtServerInit ({
      commit
    }, ctx) {
      if (!ctx.$wp) {
        throw new Error('$wp is not defined!')
      }

      if (!ctx.app.$wp) {
        throw new Error('$wp is not defined!')
      }
    }
  }
}
