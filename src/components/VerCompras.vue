<template>
  <div>
        <h1>Ver Compras &nbsp; 
        <router-link :to="'/usuario'" class="btn btn-success">
        Volver
      </router-link>
    </h1>

    <div class="container py-4">
      <div v-if="comprasCargadas">
        <table class="table table-secondary table-bordered">
          <thead>
            <tr>
              <th class="align-middle text-center">ID Compra</th>
              <th class="align-middle text-center">Fecha de Pedido</th>
              <!-- Agrega más columnas según sea necesario -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="compra in compras" :key="compra.idPedido">
              <td class="align-middle text-center">{{ compra.idPedido }}</td>
              <td class="align-middle text-center">{{ formatDate(compra.fechaPedido) }}</td>
  
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        Cargando...
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();

/* eslint-disable */
export default {
  name: "VerCompras",

  data() {
    return {
      compras: [],
      comprasCargadas: false,
    };
  },

  methods: {
    loadCompras() {
      service.getPedidos().then((result) => {
        this.compras = result;
        this.comprasCargadas = true;
      });
    },

    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },

  mounted() {
    this.loadCompras();
  },
};
</script>

<style>
</style>
