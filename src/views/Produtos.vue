<template>
    <div class="main-contanier">
       <h1>Produtos</h1>
       
       <TLproduto />
    </div>

</template>



<script>

import TLproduto from '../components/TLproduto.vue'

export default {
    name: "Produtos",
    components :{
        TLproduto}
    
}
</script>


<style scoped>

</style>