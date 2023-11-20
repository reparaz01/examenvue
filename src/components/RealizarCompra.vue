<template>
  <div>
    <div>
        <h1>Insertar Pedido &nbsp; 
        <router-link :to="'/usuario'" class="btn btn-success">
        Volver
      </router-link>
    </h1>
    </div>

    <div class="container py-4">
    <div v-if="cubosCargados">
      <div class="mb-3">
      <label for="serie" class="form-label">Selecciona una Cubo:</label>
      <select
        class="form-select input-narrow mx-auto"
        id="serie"
        v-model="selectedCubo"
      >
        <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo">
          {{ cubo.nombre }}
        </option>
      </select>
    </div>
    </div>

    <div class="text-center">
      <br/>
      <button @click.prevent="comprarCubo" class="btn btn-primary">
         Comprar Cubo
      </button>
      &nbsp;
      <router-link to="/usuario" class="btn btn-secondary">Volver</router-link>
    </div>

  </div>

  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();

/* eslint-disable */
export default {
  name: "RealizarCompra",

  data() {
    return {
      cubos: [],
      cubosCargados: false,
      selectedCubo: null,
    };
  },
  methods: {
    loadCubos() {
    
      service.getCubos().then((result) => {
        this.cubos = result;
        this.cubosCargados = true;
      });
    },
    comprarCubo() {
    if (this.selectedCubo) {
        const idCubo = parseInt(this.selectedCubo);
        console.log("id Cubo: " + idCubo);
        service.insertarPedido(idCubo)
            .then(() => {
                console.log("Compra Realizada");
            })
            .catch(error => {
                console.error(error);
            });
        this.$router.push("/usuario");
    }
},
  },

  mounted() {
    this.loadCubos();
  },
};
</script>