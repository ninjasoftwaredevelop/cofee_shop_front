<template>
  <div id="produtos-container">
    <p>Cadastro de Produtos :</p>
    <form method="POST" @submit="createProduto">
      <div class="row">
        <div class="col">
          <input
            v-model="nome"
            type="text"
            class="form-control"
            placeholder="Nome da Bebida"
          />
        </div>
        <div class="col">
          <input
            v-model="preco"
            type="text"
            class="form-control"
            placeholder="Valor"
          />
        </div>
        <div class="col">
          <button class="btn btn-warning" type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
    <div class="container-lista">
      <div class="container">
        <div class="row">
          <div class="col">Item</div>
          <div class="col">Valor</div>
          <div class="w-100"></div>
          <div class="col">Item</div>
          <div class="col">Valor</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TLproduto",
  data() {
    return {
      bebidas: null,
      valores: null,
      bebida: null,
      nome: null,
      preco: null,
      msg: null,
    };
  },
  methods: {
    async createProduto(e) {
      
      e.preventDefault();
      const data = {
        nome: this.nome,
        preco: this.preco,
      };
   
      const dataJson = JSON.stringify(data);
      console.log(dataJson)
      const req = await fetch("http://localhost:3004/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

       // limpar campos
      this.nome = ""
      this.preco= ""
    },
  },
};
</script>

<style scoped>
#produtos-container {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -250px;
}

</style>