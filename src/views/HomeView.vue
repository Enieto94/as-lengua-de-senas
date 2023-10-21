<template>
  <main>
    <img src="@/assets/img/banner-index.png" alt="" />
    <div class="text-white">¡Escribe tu nombre!</div>
    <input type="text" name="nombre" id="nombre" >
    <button class="btn-inicio" id="continuar">
      <router-link to="/temas">Aprender señas</router-link>
    </button>
  </main>
</template>
<script>
export default {
  name: "HomeView"
};
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
