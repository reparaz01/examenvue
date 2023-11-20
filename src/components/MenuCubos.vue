<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/cubo2.png" width="50" height="50" alt="Logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">
                Home
              </router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seguridad
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                  <router-link to="/login" class="dropdown-item">
                    Log In
                  </router-link>
                </li>
                <li>
                  <router-link to="/registro" class="dropdown-item">
                    Registro
                  </router-link>
                </li>
                <li>
                  <router-link to="/logout" class="dropdown-item">
                    Log Out
                  </router-link>
                </li>
              </ul>
            </li>


             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="getMarcas"
              >
                Marcas
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li v-for="marca in marcas" :key="marca.idMarca">
                  <router-link :to="'/marca/' +marca" class="dropdown-item">
                    {{ marca }}
                  </router-link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos';
const service = new ServiceCubos();

export default {
  name: "MenuCubos",
  data() {
    return {
      marcas: []
    };
  },
  methods: {
    getMarcas() {
      service.getMarcas().then((result) => {
        this.marcas = result;
      });
    }
  }
};
</script>