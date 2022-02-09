<template>
  <div class="conteudo">
    <div class="d-flex justify-content-center">
      <CompPedido />
    </div>
    <div class="d-flex justify-content-center">
      <CompPedidos />
    </div>
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
#conteudo {
  max-width: 100%;
}
</style>