<template>
  <div class="d-flex justify-content-center">
    <CompPedido />
  </div>
  <div class="d-flex justify-content-center">
    <CompPedidos />
  </div>
</template>


<script>
import CompPedidos from "../components/CompPedidos.vue";
import CompPedido from "../components/CompPedido.vue";

export default {
  name: "Pedidos",
  components: {
    CompPedidos,
    CompPedido,
  },
};
</script>


<style scoped>
</style>