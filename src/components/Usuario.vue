<template>
  <div>
    <h1>Area Personal</h1>
    <h4>aqui puedes realizar diferentes acciones</h4>
    <br> 
    <div>
      <button @click="verPerfil">Ver Perfil</button>
      <button @click="verCompras">Ver Compras</button>
      <button @click="realizarCompra">Realizar Compra</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Usuario",
  methods: {
    verPerfil() {
      this.$router.push("/detallesusuario");
    },
    verCompras() {
      this.$router.push("/compras");
    },
    realizarCompra() {
      this.$router.push("/realizarcompra");
    },
  }
}
</script>

<style>
  /* Estilos opcionales */
  button {
    margin-right: 10px;
  }
</style>
