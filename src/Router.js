import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Marca from './components/Marca.vue';
import Registro from './components/Registro.vue';
import Logout from './components/Logout.vue';
import Usuario from './components/Usuario.vue';
import DetallesUsuario from './components/DetallesUsuario.vue';
import VerCompras from './components/VerCompras.vue';
import RealizarCompra from './components/RealizarCompra.vue';
import Comentarios from './components/Comentarios.vue';



const myRoutes = [
    {
        path: "/", component: Home
    },
    {
        path: "/login", component: Login
    },
    {
        path: "/marca/:nombremarca", component: Marca
    },
    {
        path: "/registro", component: Registro
    },
    {
        path: "/logout", component: Logout
    },
    {
        path: "/usuario", component: Usuario
    },
    {
        path: "/detallesusuario", component: DetallesUsuario
    },
    {
        path: "/compras", component: VerCompras
    },
    {
        path: "/realizarcompra", component: RealizarCompra
    },
    {
        path: "/comentarios/:idcubo", component: Comentarios
    },
    
    

]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;