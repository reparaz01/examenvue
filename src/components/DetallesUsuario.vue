<template>
  <div>
    <div>
    <h1>Detalles Usuario &nbsp; 
        <router-link :to="'/usuario'" class="btn btn-success">
        Volver
      </router-link>
    </h1>
    </div>

    <div class="container py-4">
    <div v-if="usuarioCargado">
      <table class="table table-secondary table-bordered">
        <thead>
          <tr>
            <th class="align-middle text-center">ID</th>
            <th class="align-middle text-center">Nombre</th>
            <th class="align-middle text-center">Email</th>
            <th class="align-middle text-center">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle text-center">{{ usuario.idUsuario }}</td>
            <td class="align-middle text-center">{{ usuario.nombre  }}</td>
            <td class="align-middle text-center">{{ usuario.email  }}</td>
            <td class="align-middle text-center">{{ usuario.pass }}</td>
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
        usuario: null,
        usuarioCargado: false,
    };
  },
  methods: {
    loadUsuario() {
    
      service.getDatosUsuario().then((result) => {
        this.usuario = result;
        this.usuarioCargado = true;
      });
    },
  },

  mounted() {
    this.loadUsuario();
  },
};
</script>