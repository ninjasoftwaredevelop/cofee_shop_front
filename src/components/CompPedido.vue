<template>
  <div>
    <form id="pedido-form" method="POST" @submit="createPedido">
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input
          type="text"
          id="cliente"
          name="cliente"
          v-model="cliente"
          placeholder="Digite o seu nome"
        />
      </div>
      <div class="input-container">
        <label for="produto">Escolha a bebida :</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="produto"
          placeholder="Digite a bebida"
        />
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Pedido!" v-model="status" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CompPedido",
  data() {
    return {
     cliente: null,
     produto: null,
     status: null,
    };
  },
  methods: {
   
    async createPedido(e) {
      e.preventDefault();
      const data = {
        cliente: this.cliente,
        produto: this.produto,
        status: "Solicitado"
        
      };
      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3004/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();
      console.log(res);

      // limpar campos e atualiza a pagina
      this.$router.go();
      this.cliente = "";
      this.produto = "";
    },
  },
};
</script>

<style scoped>
#pedido-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>