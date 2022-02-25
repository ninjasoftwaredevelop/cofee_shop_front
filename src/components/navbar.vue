<template>
  <div id="nav">
    <router-link id="logo-url" to="/">
      <img id="logo" :src="logo" :alt="alt" />
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
  props: ["logo", "alt"],
};
</script>
<style scoped>
#nav {
  background-color: #000000;
  border-bottom: 4px solid #fcba03;
  border-top: 4px solid #fcba03;
  padding: 1px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo {
  width: 80px;
  height: 80px;
}
#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
  font-size: 1em;
}
#nav a:hover {
  color: #fff;
}
</style>