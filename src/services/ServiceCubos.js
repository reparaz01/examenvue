import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries {

// METODO PARA AUTORIZAR ACCECSO

    autorizarAcceso(email, password) {
        const json = {
            "email": email,
            "password": password
        };
    
        const headers = {
            'Content-Type': 'application/json',
        };
    
        const request = 'api/Manage/Login';
        const url = Global.urlApi + request;
    
        return axios.post(url, json, { headers })
            .then(response => {
                Global.token = response.data.response;
                return response; 
            })
            .catch(error => {
                console.error("Error en la solicitud HTTP:", error);
                throw error; 
            });
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


    getCubos() {
      return new Promise(function(resolve) {
        const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Cubos";
          var cubos = [];
          var url = Global.urlApi + request;
          axios.get(url, { headers }).then(response => {
            cubos = response.data;
              resolve(cubos);
          })
        })

    }
    
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getMarcas() {
        return new Promise(function(resolve) {
            var request = "api/Cubos/Marcas";
            var marcas = [];
            var url = Global.urlApi + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


    getCubosMarca(nombremarca) {
        return new Promise(function(resolve) {
            const headers = {
                'Authorization': 'bearer ' + Global.token,
              };
              var request = "api/Cubos/CubosMarca/" + nombremarca;
              var cubos = [];
              var url = Global.urlApi + request;
              axios.get(url, { headers }).then(response => {
                cubos = response.data;
                  resolve(cubos);
              })
            })
    }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getComentarios(idCubo) {
        return new Promise(function(resolve) {
            var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
            var comentarios = [];
            var url = Global.urlApi + request;
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })
            })
    }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    registrarUsuario(usuario){
        return new Promise(function(resolve) {
            var request = "api/Manage/RegistroUsuario";
            var url = Global.urlApi + request;
            axios.post(url, usuario).then(response => {
                resolve(response);
            })
        })
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    logout(){
        Global.token = "";
    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getDatosUsuario() {
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Manage/PerfilUsuario";
          var usuario = {};
          var url = Global.urlApi + request;
          axios.get(url, { headers }).then(response => {
            usuario = response.data;
            resolve(usuario);
          })
      })

    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    insertarPedido(idCubo) {
        return new Promise(function(resolve) {

          var json = null;
        
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Compra/InsertarPedido/" + idCubo;
          var url = Global.urlApi + request;
          axios.post(url,json, { headers }).then(response => {
            resolve(response);
        })
      })

    }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    getPedidos() {
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Compra/ComprasUsuario";
          var compras = [];
          var url = Global.urlApi + request;
          axios.get(url, { headers }).then(response => {
            compras = response.data;
            resolve(compras);
          })
      })

    }


}