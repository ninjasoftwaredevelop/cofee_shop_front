<template>
  <div class="conteudo">
    <div class="d-flex justify-content-center">
      <CompPedidoJao />
    </div>
    <div class="d-flex justify-content-center">
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
#conteudo {
  max-width: 100%;
}
</style>