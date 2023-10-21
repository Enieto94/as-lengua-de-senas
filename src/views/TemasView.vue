<template>
  <nav>
    <h1>AS - Lengua de señas</h1>
    <img src="@/assets/img/bandera-colombia.png" alt="" />
  </nav>

  <div class="name" >Nombre</div>
  <main>
    <div class="tema-c">
      <div class="info-c">
        <img src="@/assets/img/info.png" alt="" />
        <div>
          <h4>NIVEL 1</h4>
          <h4>Vocabulario básico</h4>
        </div>
      </div>
      <router-link to="letras" class="tema-item">
        <div>
          <img src="@/assets/img/letras.png" alt="" />
          <h5>Abecedario</h5>
        </div>
      </router-link>
      <router-link to="numeros" class="tema-item">
        <div>
          <img src="@/assets/img/numeros.png" alt="" />
          <h5>Números</h5>
        </div>
      </router-link>
      <router-link to="colores" class="tema-item">
        <div>
          <img src="@/assets/img/colores.png" alt="" />
          <h5>Colores</h5>
        </div>
      </router-link>
    </div>
    
    <!-- <button @click="toggleClass">Cambiar Clase</button> -->

    <!-- <div class="tema-c" v-bind:class="{locked: isActive}"> -->
    <div class="tema-c">
      <div class="info-c">
        <img src="@/assets/img/info.png" alt="" />
        <div>
          <h4>NIVEL 2</h4>
          <h4>Vocabulario Intermedio</h4>
        </div>
      </div>
      <router-link to="presentacion" class="tema-item">
        <div>
          <img src="@/assets/img/presentacion.png" alt="" />
          <h5>Presentacion Personal</h5>
        </div>
      </router-link>
      <router-link to="preguntas" class="tema-item">
        <div>
          <img src="@/assets/img/preguntas.png" alt="" />
          <h5>Preguntas básicas </h5>
        </div>
      </router-link>
      <router-link to="verbos" class="tema-item">
        <div>
          <img src="@/assets/img/verbs.png" alt="" />
          <h5>Verbos</h5>
        </div>
      </router-link>
      <br>
    </div>
  </main>
  <MenuView></MenuView>
</template>

<script>
import { RouterLink } from "vue-router";
import MenuView from "./MenuView.vue";

export default {
  name: "TemasView",
  data() {
    return {
      isActive: true,
      unlock: true
    };    
  },
  components: {
    RouterLink,
    MenuView,
  },
  methods: {
    toggleClass() {
        // Cambia el estado de isActive cuando hace clic en el botón
        this.isActive = !this.isActive;
    }
  },
};
</script>
<style scoped>
.info-c {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.tema-item {
  text-decoration: none;
}
main {
  padding-top: 60px;
  background: var(--vt-c-naranja);
  padding-bottom: 5vh;
}
.tema-c {
  background: #fff;
  height: 98vh !important;
  width: 90%;
  border-radius: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
}
.tema-item {
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  text-align: center;
}
.tema-item img {
  height: 64px;
  border-radius: 30%;
}

.locked{
  opacity: 0.5; /* Reduce la opacidad para dar la apariencia de deshabilitado */
  background-color: #ccc; /* Cambia el color de fondo para indicar que está deshabilitado */
  pointer-events: none; /* Evita eventos de ratón y clics en el bloque */
  /* cursor: not-allowed; */
}

.name {
  position: fixed;
  top: 60px; 
  left: 10px;
  background: #000000bc;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
.score {
  position: fixed;
  top: 10px; 
  right: 20px;
  background: #000000bc;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}

</style>