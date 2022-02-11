<template>
  <div class="container">
    <div class="Pedido">
      <CompPedidoJao />
    </div>
    <div class="ListagemPedidos">
      <CompPedidos />
    </div>
  </div>
</template>


<script>
import CompPedidos from "../components/CompPedidos.vue";
import CompPedidoJao from "../components/CompPedidoJao.vue";

export default {
  name: "Pedidos",
  components: {
    CompPedidos,
    CompPedidoJao,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>


<style scoped>
/* Cria  a Barra de Rolagem dentro da Classe Listagem de Pedidos */
 

  .ListagemPedidos {
    height: 310px;
    overflow-y: scroll;
  }
</style>