<template>
  <div></div>
  <header>
    <RouterLink to="/temas">Temas</RouterLink>
    
    <RouterLink to="/" @click="restoreStorage">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/img/mano.png"
        width="48"
        height="48"
    /></RouterLink>

    <RouterLink to="/quiz" v-if="count >= 26 && modulo == 'ABC'" >Quiz </RouterLink>
    <RouterLink to="/quiznumeros" v-if="count >= 9 && modulo == 'NUMEROS'" >Quiz </RouterLink>
    <RouterLink to="/quizcolores" v-if="count >= 14 && modulo == 'COLORES'" >Quiz </RouterLink>
    <RouterLink to="/quizpresentaciones" v-if="count >= 5 && modulo == 'PRESENTACIONES'" >Quiz </RouterLink>
    <RouterLink to="/quizpreguntas" v-if="count >= 10 && modulo == 'PREGUNTAS'" >Quiz </RouterLink>
    <RouterLink to="/quizverbos" v-if="count >=  10 && modulo == 'VERBOS'" >Quiz </RouterLink>
    <!-- <RouterLink to="/juego" v-else >Quiz {{ count }} {{ isDisabled }} xd </RouterLink> -->
  </header>
</template>

<script>
import { watchEffect } from 'vue';


function restoreStorage() {
  localStorage.removeItem("miDato");
  // localStorage.clear();
  localStorage.clear();
  localStorage.setItem("miDato",'');

}
export default  {
  name: "MenuView",
  props:['count','score','modulo','nombre','nivelesCompletados'],
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
