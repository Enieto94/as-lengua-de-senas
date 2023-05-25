<template>
  <div></div>
  <header>
    <RouterLink to="/temas">Temas</RouterLink>
    
    <RouterLink to="/">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/img/mano.png"
        width="48"
        height="48"
    /></RouterLink>

    <RouterLink to="/quiz" v-if="count >= 26 && modulo == 'abecedario'" >Quiz </RouterLink>
    <RouterLink to="/quiznumeros" v-if="count >= 9 && modulo == 'numeros'" >Quiz </RouterLink>
    <RouterLink to="/quizcolores" v-if="count >= 14 && modulo == 'colores'" >Quiz </RouterLink>
    <!-- <RouterLink to="/juego" v-else >Quiz {{ count }} {{ isDisabled }} xd </RouterLink> -->
  </header>
</template>

<script>


export default  {
  name: "MenuView",
  props:['count','score','modulo']
}
</script>

<style scoped>

</style>
