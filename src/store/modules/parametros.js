export default {
  state: {
    quantidade: 2,
    preco: 10
  },
  mutations: {
    setQuantidade(state, payload) {
      state.quantidade = payload
    },
    setPreco(state, payload) {
      state.preco = payload
    }
  }
}
