<template>
  <div>
    <div>
    <h1>Bienvenido</h1>
    <h2>Estos son nuestros Cubos de Rubik!</h2>

    </div>

    <div class="container py-4">
    <div v-if="cubosCargados">
      <table class="table table-secondary table-bordered">
        <thead>
          <tr>
            <th class="align-middle text-center">Nombre</th>
            <th class="align-middle text-center">Foto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cubo in cubos" :key="cubo.idCubo">
            <td class="align-middle text-center">{{ cubo.nombre }}</td>
            <td class="align-middle text-center">
              <img :src="cubo.imagen" :alt="cubo.nombre" style="max-width: 100px" />
            </td>
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
  name: "Home",

  data() {
    return {
      cubos: [],
      cubosCargados: false,
    };
  },
  methods: {
    loadCubos() {
    
      service.getCubos().then((result) => {
        this.cubos = result;
        this.cubosCargados = true;
      });
    },
  },

  mounted() {
    this.loadCubos();
  },
};
</script>