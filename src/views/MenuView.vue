<template>
  <div></div>
  <header>
    <RouterLink to="/temas">Temas </RouterLink>
    
    <RouterLink to="/" @click="restoreStorage">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/img/mano.png"
        width="48"
        height="48"
    /></RouterLink>

    <RouterLink to="/quiz" v-if="arregloLetras >= 25 && modulo == 'ABC'" >Quiz </RouterLink>
    <RouterLink to="/quiznumeros" v-if="arregloLetras >= 19 && modulo == 'NUMEROS'" >Quiz </RouterLink>
    <RouterLink to="/quizcolores" v-if="arregloLetras >= 11 && modulo == 'COLORES'" >Quiz </RouterLink>
    <RouterLink to="/quizpresentaciones" v-if="arregloLetras >= 4 && modulo == 'PRESENTACIONES'" >Quiz </RouterLink>
    <RouterLink to="/quizpreguntas" v-if="arregloLetras >= 9 && modulo == 'PREGUNTAS'" >Quiz </RouterLink>
    <RouterLink to="/quizverbos" v-if="arregloLetras >=  9 && modulo == 'VERBOS'" >Quiz </RouterLink>
    <!-- <RouterLink to="/juego" v-else >Quiz {{ count }} {{ isDisabled }} xd </RouterLink> -->
  </header>
</template>

<script>
import store from '@/store';
import { watchEffect } from 'vue';


function restoreStorage() {
  localStorage.removeItem("miDato");
  // localStorage.clear();
  localStorage.clear();
  localStorage.setItem("miDato",'');
  store.dispatch("reset");

}
export default  {
  name: "MenuView",
  props:['modulo','nombre','arregloLetras'],
  data() {
    return {
      restoreStorage
    }
  }
}
watchEffect(()=>{
  restoreStorage
})
</script>

<style scoped>

</style>
