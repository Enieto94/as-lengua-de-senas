<template>
  <nav>
    <router-link to="/temas"><h4 style="color: #fff;">Atrás</h4></router-link>
      <h2>{{ modulo }} <svg :style="{fill: '#'+ currentColor +' !important'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
        <title>check-decagram</title>
        <path class="path"  
          d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
        />
        
      </svg></h2>
      
    <img src="@/assets/img/bandera-colombia.png" alt="" />
  </nav>
</template>

<script>
export default {
  name: "MenuAtrasTop",
  props: ['currentColor','modulo'],

};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
}
nav button {
  padding: 10px 30px;
  background: var(--vt-c-negro);
  outline: 0;
  border: 0;
  color: var(--vt-c-blanco);
}
svg {
  width: 30px;
}
h2 {
  display: flex;
  align-items: center;
}



</style>

