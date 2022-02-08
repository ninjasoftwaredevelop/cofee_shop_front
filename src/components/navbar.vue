<template>
    <div id="nav">
    <router-link id="logo-url" to="/">
    <img id="logo" :src="logo" :alt="alt">
      </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos</router-link>|
    <router-link to="/clientes">Clientes</router-link>|
    <router-link to="/produtos">Produtos</router-link>
    
  </div>
</template>

<script>


export default { 
       name: "Navbar",
       props: ["logo","alt"] 
    }

</script>
<style scoped>
    #nav {
    background-color:#673400;
    background-image: linear-gradient(to bottom, transparent, rgba(#B5651D));
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 80px;
    height: 80px;
  }
  #nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
    font-size: 25px;
  }
  #nav a:hover {
    color: #FFF;
  }
</style>