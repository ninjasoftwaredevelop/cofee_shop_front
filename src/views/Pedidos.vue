<template>
    <div class="d-flex justify-content-center">
       
       <CompPedidos />
    </div>

</template>


<script>
import CompPedidos from '../components/CompPedidos.vue'

export default {
    name: "Pedidos",
    components : {
        CompPedidos,
    }
}
</script>


<style scoped>

</style>