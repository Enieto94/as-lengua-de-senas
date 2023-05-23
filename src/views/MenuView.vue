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

    <div  v-if="count >= 0 && count < 26" > </div>
    <RouterLink to="/juego" v-if="count >= 26 " >Quiz </RouterLink>
    <!-- <RouterLink to="/juego" v-else >Quiz {{ count }} {{ isDisabled }} xd </RouterLink> -->
  </header>
</template>

<script>


export default  {
  name: "MenuView",
  props:['count']
}
</script>

<style scoped>

</style>
