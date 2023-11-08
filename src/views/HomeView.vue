<template>
  <main>
    <img src="@/assets/img/banner-index.png" alt="" />
    <div class="text-white">¡Escribe tu nombre!</div>
    <input type="text" name="nombre" id="nombre" v-model="localStorageData">
    <button class="btn-inicio" id="continuar" @click="guardarEnLocalStorage, bloquear()">
      <router-link to="/temas" >Aprender señas</router-link>
    </button> 
  </main>
</template>
<script>
import { ref , watchEffect} from 'vue';
let localStorageData = ref(localStorage.getItem('miDato'));
function guardarEnLocalStorage() {
  localStorage.setItem('miDato', localStorageData.value);
}
function actualizarRegistro() {
    var nuevoValor = 0;

    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud AJAX
    xhr.open("POST", "http://localhost:3000/update.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Definir la función de callback para manejar la respuesta
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('hecho')
        }
    };

    // Enviar los datos al servidor
    var data =  nuevoValor;
    xhr.send(data);
}

export default {
  name: "HomeView",
  data() {
    return {
      localStorageData
    }
  },
  methods: {
    bloquear() {
       actualizarRegistro();
      //  document.getElementById("nivel-2").classList.remove("locked");
    },
  }
};

watchEffect(() => {
  guardarEnLocalStorage();
});
</script>
<style scoped>
main {
  background: var(--vt-c-verde) !important;
}
main img {
  width: 300px;
}
.btn-inicio {
  width: 250px;
  font-size: 20px;
  margin: 30px 0;
  padding: 15px 0;
  background: var(--vt-c-verde-lima);
  outline: 0;
  border-radius: 10px;
  border: 1px transparent;
}
.btn-inicio a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
.text-white {
  color: #fff;
  font-size: 32px;
}
input#nombre {
  font-size: 28px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  margin: 15px auto;
  padding: 10px 5px;
}
</style>
