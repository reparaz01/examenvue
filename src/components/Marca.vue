<template>
  <div>
    <h2 class="mb-3">Cubos de la Marca: {{ $route.params.nombremarca }} &nbsp;
      <router-link :to="'/'" class="btn btn-success">
        Volver
      </router-link>
    </h2>

    <div v-if="cubosCargados" class="container mt-5">
      <div class="row">
        <div v-for="cubo in cubos" :key="cubo.idCubo" class="col-lg-4 mb-3">
          <div class="card">
            <img
              :src="cubo.imagen"
              class="card-img-top"
              :alt="cubo.nombre"
              style="max-width: 600px"
            />
            <div class="card-body text-center">
              <br />
              <h4 class="card-title">{{ cubo.nombre }}</h4>
              <p class="card-text">Modelo: {{ cubo.modelo }}</p>
              <p class="card-text">Marca: {{ cubo.marca }}</p>
              <p class="card-text">Color: {{ cubo.color }}</p>
              <p class="card-text">Precio: {{ cubo.precio }}€</p>
              <p class="card-text">Valoracion: {{ cubo.valoracion }}/10</p>
              <div class="container">
                <div class="row">
                  <div class="text-center">
                    <br />
                    <router-link
                      :to="'/comentarios/' + cubo.idCubo"
                      class="btn btn-primary"
                    >
                      Ver Comentarios
                    </router-link>
                    &nbsp;

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      Cargando...
    </div>
  </div>
</template>


<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();

/* eslint-disable */
export default {
  name: "Marca",

  data() {
    return {
      cubos: [],
      cubosCargados: false,
      previousRoute: null,
    };
  },

  computed: {
    groupedCubos() {
      return this.cubos.reduce((result, cubo, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!result[groupIndex]) {
          result[groupIndex] = [];
        }
        result[groupIndex].push(cubo);
        return result;
      }, []);
    },
  },

  methods: {
    loadCubosMarca() {
      var nombremarca = this.$route.params.nombremarca;

      service.getCubosMarca(nombremarca).then((result) => {
        this.cubos = result;
        this.cubosCargados = true;
      });
    },
  },

  mounted() {
    this.loadCubosMarca();
  },
  updated() {
    const currentRoute = this.$route.fullPath;

    if (currentRoute !== this.previousRoute) {
      this.previousRoute = currentRoute;
      this.cubosCargados = false; 
      this.loadCubosMarca(); 
    }
  },
};
</script>
