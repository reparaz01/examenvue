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





    getPersonajesSerieDificil(id) {
        return new Promise(function(resolve) {
            const request = "api/personajes";
            const url = Global.urlApi + request;
          
            axios.get(url).then(response => {
                const personajes = response.data;
                const personajesSerie = [];
          
                for (let i = 0; i < personajes.length; i++) {
                  if (personajes[i].idSerie == id) {
                    personajesSerie.push(personajes[i]);
                  }
                }

                console.log(personajesSerie.length);

            resolve(personajesSerie);
          });
        });
      }


    getPersonajesSerie(id) {
        return new Promise(function(resolve) {
            const request = "api/series/personajesserie/" + id;
            const url = Global.urlApi + request;
            var personajes = [];
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
          });
        });
      }


      getPersonajesSerieSeguro(id) {
          return new Promise(function(resolve) {
            const headers = {
              'Authorization': 'bearer ' + Global.token,
            };
            const request = "api/series/personajesserie/" + id;
            const url = Global.urlApi + request;
            var personajes = [];
            axios.get(url, { headers }).then(response => {
                personajes = response.data;
                resolve(personajes);
          });
        });

      }
      
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    crearPersonaje(personaje){
        return new Promise(function(resolve) {
            var request = "api/personajes";
            var url = Global.urlApi + request;
            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

    crearPersonajeSeguro(personaje){
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/personajes";
          var url = Global.urlApi + request;
          axios.post(url, personaje, { headers }).then(response => {
              resolve(response);
          })
      })

    }
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

    detallesSerie(id) {
        return new Promise(function(resolve){
            var request = "api/Series/" + id;
            var url = Global.urlApi + request;
            var serie = {};
            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })
        })
    }


    detallesSerieSeguro(id) {
        return new Promise(function(resolve){
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          var request = "api/Series/" + id;
          var url = Global.urlApi + request;
          var serie = {};
          axios.get(url, { headers }).then(response => {
              serie = response.data;
              resolve(serie);
          })
      })

    }

      
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
      

    updatePersonaje(idPersonaje, idSerie) {
        return new Promise(function(resolve) {
            const url = Global.urlApi + 'api/personajes/' + idPersonaje + "/" + idSerie;
            axios.put(url).then(() => {
                resolve();
            });
        });
    }

    updatePersonajeSeguro(idPersonaje, idSerie) {
        return new Promise(function(resolve) {
          const headers = {
            'Authorization': 'bearer ' + Global.token,
          };
          const url = Global.urlApi + 'api/personajes/' + idPersonaje + "/" + idSerie;
          axios.put(url, { headers }).then(() => {
              resolve();
          });
      });

    }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    

    deletePersonajeSeguro(id) {
      return new Promise(function(resolve){
        const headers = {
          'Authorization': 'bearer ' + Global.token,
        };
        var request = "api/personajes/" + id;
        var url = Global.urlApi + request;
        axios.delete(url, { headers }).then(response =>  {
            resolve(response);
        })
    })
    }

}