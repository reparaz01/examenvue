<template>
  <div class="container py-4">
    <h1 class="text-center fw-bold mb-4">Registro de Usuarios</h1>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control input-narrow mx-auto"
        id="nombre"
        v-model="usuario.nombre"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="text"
        class="form-control input-narrow mx-auto"
        id="imagen"
        v-model="usuario.email"
      />
    </div>
    <div class="mb-3">
      <label for="pass" class="form-label">Contraseña</label>
      <input
        type="password"
        class="form-control input-narrow mx-auto"
        id="pass1"
        v-model="usuario.pass"
      />
    </div>
    <div class="mb-3">
      <label for="pass2" class="form-label">Repetir Contraseña</label>
      <input
        type="password"
        class="form-control input-narrow mx-auto"
        id="pass2"
        v-model="passwordRepeat"
      />
    </div>

    <div class="text-center">
      <br />
      <button @click.prevent="registrarUsuario" class="btn btn-primary">
        Registrar Usuario
      </button>
      &nbsp;
      <router-link to="/" class="btn btn-secondary">Volver</router-link>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();

/* eslint-disable */
export default {
  name: "Registro",
  data() {
    return {
      usuario: {
        idPersonaje: 0,
        nombre: "",
        email: "",
        pass: ""
      },
      passwordRepeat: ""
    };
  },
  methods: {
    registrarUsuario() {
      if (this.usuario.pass !== this.passwordRepeat) {
        alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
        return;
      }

      service.registrarUsuario(this.usuario).then(result => {
        console.log(this.usuario);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.input-narrow {
  max-width: 480px; 
}
</style>
