<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import TLproduto from './components/TLproduto.vue'

export default {
  components: {
    Navbar,
    Footer,
    TLproduto,
  },
  data(){
    return {
       logo_src: "/img/logoa.png",
      app_name: "Cafeteria "
    }
  }
  
}
</script>

<style>
  *{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin :50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 30px;
    color:chocolate;
  }
</style>
