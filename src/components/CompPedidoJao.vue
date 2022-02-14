<template>
  <div class="pedido">
    <main>
      <section class="items">
        <h4>Selecione os produtos</h4>
        

        <div
          v-for="(product, index) in this.products"
          :key="index"
          class="product"
          @click="product.active = !product.active"
          :class="{ selected: product.active }"
        >
          <div class="photo">
            <img src="../imgs/sem-foto.png" />
          </div>
          <div class="description">
            <span class="name">{{ product.nome }}</span>
            <span class="price">R$ {{ product.preco }}</span>
            <div class="quantity-area" v-if="product.active">
              <button
                @click.stop="product.quantity--"
                :disabled="product.quantity <= 1"
              >
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click.stop="product.quantity++">+</button>
            </div>
          </div>
        </div>
      </section>

      <section v-if="total() > 0" class="summary">
        <div class="form-group">
          <label for="Informe o nome do Cliente "></label>
          <input
            type="text"
            class="form-control"
            id="nomeCliente"
            v-model="cliente"
            placeholder="Nome Cliente"
          />
          <small id="nomeCliente" class="form-text text-muted"

            >Informe Nome do cliente</small
          >
        </div>
        <strong>Resumo do pedido</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in this.products" :key="index">
              <template v-if="product.active">
                <td>{{ product.quantity + "x " + product.nome }}</td>
                <td>{{ (product.quantity * product.preco).toFixed(2) }}</td>
              </template>
            </tr>

            <tr>
              <th>Total</th>
              <th>{{ total() }}</th>
            </tr>
          </tbody>
        </table>
        <button @click="saveProducts()">Adicionar pedido</button>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CompPedidoJao",

  methods: {
    total: function () {
      let total = 0;
      this.products.forEach(function (element) {
        if (element.active) {
          total += element.preco * element.quantity;
        }
      });
      return total.toFixed(2);
    },    
   
    saveProducts() {
      let carrinho = {};
      carrinho.produtos = [];

      let produto = {};

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].active) {
          produto.id = this.products[i].id;
          produto.qtd = this.products[i].quantity;
          produto.preco = this.products[i].preco;
          produto.nome = this.products[i].nome;

          carrinho.produtos.push({
            id: this.products[i].id,
            qtd: this.products[i].quantity,
            valor: this.products[i].preco,
            nome: this.products[i].nome,
          });
        }

        carrinho.total = this.total();
        carrinho.cliente = this.cliente;
        carrinho.status = "Solicitado";
        this.$router.go();
      }
      console.log("carrinho " + carrinho.produtos);
      axios.post("http://localhost:3004/pedidos", carrinho).then((response) => {
        console.log(response);
      });
    },
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

main > section.items h4 {
  text-align: center;
  margin-top: 0;
  width: 100%;
  color: 4px solid #fcba03;
}
main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

main > section.items {
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #fcba03;
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  justify-content: center;
}

section.items .product {
  border: 1px solid lightgrey;
  margin: 6px;
  flex: 0 0 calc(33.333% - 24px);
  cursor: pointer;
  text-align: center;
}

section.items .product.selected {
  border: 2px solid #fcba03;
}

section.items .photo img {
  max-width: 90px;
}

section.items .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 11px;
  line-height: 15px;
}

section.items .description .price {
  font-weight: bold;
  margin: 4px auto;
}

section.items .description .quantity-area {
  margin: 8px auto;
  height: 14px;
}

section.items .description .quantity-area button {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

section.items .description .quantity-area .quantity {
  font-weight: bold;
  margin: 0 4px;
}

section.summary {
  background-color: #fcba03;
  padding: 20px;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
  margin: 25px;
}

section.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

section.summary table tbody tr:last-of-type th {
  border-top: 1px solid black;
  padding-top: 4px;
}

 

</style>
