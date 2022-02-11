<template>
  <div class="container">
    <div id="cafe-table">
      <div>
        <div id="cafe-table-heading">
          <div class="order-id">#:</div>
          <div>Cliente:</div>
          <div>Produto:</div>
          <div>Valor:</div>
          <div>Status:</div>
          <div>Ações:</div>
        </div>
      </div>
      <div id="cafe-table-rows">
        <div class="cafe-table-row" v-for="cafe in cafes" :key="cafe.id">
          <div class="order-number">{{ cafe.id }}</div>
          <div>{{ cafe.cliente }}</div>
          <div>{{ cafe.produto }}</div>
          <div>R$ {{ cafe.total }}</div>
          <div>
            <select
              name="status"
              class="status"
              @change="updateCafe($event, cafe.id)"
            >
              <option
                :value="s.tipo"
                v-for="s in status"
                :key="s.id"
                :selected="cafe.status == s.tipo"
              >
                {{ s.tipo }}
              </option>
            </select>
          </div>

          <button
           
            class="delete-btn"
            
            @click="deleteCafe(cafe.id)"
          >
            Cancelar
          </button>
          <button class="sucess-btn" @click="deleteCafe(cafe.id)">
            
            Entregue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompPedidos",
  data() {
    return {
     
      cafes: null,
      cafes_id: null,
      status: [],
      teste: true,
    };
  },
  methods: {
    async getPedidos() {
      const req = await fetch("http://localhost:3004/pedidos");
      const data = await req.json();
      this.cafes = data;
      this.getStatus();
      
    
  
    },
    async getStatus() {
      const req = await fetch("http://localhost:3004/status");
      const data = await req.json();
      this.status = data;
      this.verificaSituacao()
    },
    async deleteCafe(id) {
      const req = await fetch(`http://localhost:3004/pedidos/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();
      this.getPedidos();
    },
    async updateCafe(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3004/pedidos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();
      console.log(res);
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
#cafe-table {
  max-width: 1200px;
  margin: 0 auto;
  
}
#cafe-table-heading,
#cafe-table-rows,
.cafe-table-row {
  display: flex;
  flex-wrap: wrap;
}
#cafe-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}
.cafe-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
#cafe-table-heading div,
.cafe-table-row div {
  width: 19%;
}
#cafe-table-heading .order-id,
.cafe-table-row .order-number {
  width: 5%;
}
select {
  padding: 12px 6px;
  margin-right: 12px;
}
.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: auto auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}

.sucess-btn {
  background-color: rgb(10, 2, 114);
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.sucess-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
