<template>
  <MenuCubos/>
  <router-view></router-view>
</template>

<script>
import MenuCubos from './components/MenuCubos.vue';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle"; 

export default {
  name: 'App',
  components: {
    MenuCubos, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>