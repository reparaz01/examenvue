<template>
  <div>
    <div>
      <h1>Comentarios del Cubo &nbsp; 
        <router-link :to="'/'" class="btn btn-success">
        Volver
      </router-link>
      </h1>
      
    </div>

    <div class="container py-4">
      <div v-if="comentariosCargados">
        <table class="table table-secondary table-bordered">
          <thead>
            <tr>
              <th class="align-middle text-center">Usuario</th>
              <th class="align-middle text-center">Comentario</th>
              <th class="align-middle text-center">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comentario in comentarios" :key="comentario.idComentario">
              <td class="align-middle text-center">{{ comentario.idUsuario }}</td>
              <td class="align-middle text-center">{{ comentario.comentario }}</td>
              <td class="align-middle text-center">{{ comentario.fechaComentario }}</td>
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
  name: "Comentarios",

  data() {
    return {
      comentarios: [],
      comentariosCargados: false,
    };
  },

  methods: {
    loadComentarios() {
      var idCubo = parseInt(this.$route.params.idcubo);

      service.getComentarios(idCubo).then((result) => {
        this.comentarios = result;
        this.comentariosCargados = true;
      });
    },
  },

  mounted() {
    this.loadComentarios();
  },
};
</script>
