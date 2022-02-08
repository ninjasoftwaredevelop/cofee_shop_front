<template>
  <div class="d-flex justify-content-center">
    <TLproduto />

    <div class="d-flex flex-row">
      <h2>Vai aparecer aki</h2>
    </div>
  </div>
</template>



<script>
import TLproduto from "../components/TLproduto.vue";

export default {
  name: "Produtos",
  components: {
    TLproduto,
  },
};
</script>


<style scoped>
</style>