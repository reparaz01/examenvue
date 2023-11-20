<template>
 <h1>Se ha cerrado la Sesion</h1>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();
import Global from './../Global';

/* eslint-disable */
export default {
  name: "Logout",
  data() {

  },
  methods: {
    logout() {
        service.logout();
        console.log("LOGOUT TOKEN: " + Global.token);
    },

  },
  mounted() {
    this.logout();
  },
};
</script>

<style>
.input-narrow {
  max-width: 500px; 
}
</style>