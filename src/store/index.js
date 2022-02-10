import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products) {

      for (let i = 0; i < products.length; i++) {
        products[i].quantity = 1;
        products[i].active = false;
      }
      state.products = products;
    },

    saveProducts(state, products) {

      state.products = products

    }




  },
  actions: {
    loadProducts({ commit }) {
      axios.get("http://localhost:3004/produtos").then((response) => {
        commit('loadProducts', response.data)
      });
    },

    async saveProducts({ commit }, products) {
      const res = await axios.post('http://localhost:3004/produtos', products)
      commit('saveProducts', res.data)
    }

  },
  modules: {
  }
})
