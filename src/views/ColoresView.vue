<template>
  <MenuAtrasTop></MenuAtrasTop>

  <main>
    <h1>Colores</h1>
  </main>
  <MenuView></MenuView>
</template>
<script>
import MenuView from "../views/MenuView.vue";
import MenuAtrasTop from "../components/MenuAtrasTop.vue";

export default {
  name: "ColoresView",
  components: {
    MenuAtrasTop,
    MenuView,
  },
};
</script>

<style scoped></style>
