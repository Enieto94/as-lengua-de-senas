<template>
  <MenuAtrasTop :currentColor="currentColor" :modulo="modulo"></MenuAtrasTop>
  <main>
    <FilterByPregunta></FilterByPregunta>
    
    <div class="letters-c">
      <div :class="
      pregunta.visto == false ? 'letter-item' :
      pregunta.visto == true ? 'letter-item active':
      'letter-item'"   v-for="pregunta in preguntas" :key="pregunta.id" @click="mostrarImg(pregunta.url_src,pregunta.id,pregunta.visto)" >
        <!-- <img :src="pregunta.url_src" alt=""> -->
        
          <span>{{ pregunta.nom_letra }}</span>

          <div v-if="pregunta.visto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>eye</title>
              <path
                d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
              />
            </svg>
          </div>

          <div v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>eye-lock</title>
            <path
              d="M20.8 17V15.5C20.8 14.1 19.4 13 18 13S15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17M19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2S19.5 14.7 19.5 15.5V17M15 12C14.1 12.7 13.5 13.6 13.3 14.7C12.9 14.9 12.5 15 12 15C10.3 15 9 13.7 9 12S10.3 9 12 9 15 10.3 15 12M12 19.5C7 19.5 2.7 16.4 1 12C2.7 7.6 7 4.5 12 4.5S21.3 7.6 23 12C22.8 12.5 22.5 13 22.3 13.5C21.5 12 19.8 11 18 11C17.6 11 17.3 11.1 16.9 11.1C16.5 8.8 14.5 7 12 7C9.2 7 7 9.2 7 12S9.2 17 12 17H12.3C12.1 17.4 12 17.8 12 18.2V19.5Z"
            />
          </svg>
          </div>
        
        
      
      </div>
    </div>
      <img src="" alt="" id="imgshow">
  </main>

  <MenuView :count="count" :modulo="modulo"></MenuView>
</template>

<script>

import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import MenuAtrasTop from "../components/MenuAtrasTop.vue";
import FilterByPregunta from "../components/FilterByPregunta.vue";
import MenuView from "../views/MenuView.vue";
import store from "@/store";

// import TemaComponent from "../components/TemaComponent.vue";

export default {
  name: "PreguntasView",
  components: { MenuAtrasTop, MenuView,FilterByPregunta },
  setup() {
    const store = useStore();
     const preguntas = computed(() => {
      return store.state.preguntasFilter;
    });
   
    onMounted(() => {
      store.dispatch("getPreguntas");
    });
    return {
      preguntas,
    };
  },
  data() {

    return {
      count: 0,
      currentColor: 'fff',
      modulo: 'PREGUNTAS'

    }
  },
  methods: {
    mostrarImg(url_src, id, visto) {
      setTimeout(() => {
        store.dispatch("getPreguntas");
        
      }, 500);      
      const data = {
        "visto": !visto
      }; 

      fetch('http://127.0.0.1:8000/api/updatepregunta/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      this.count++;
   
      if(this.count >= 9){
        // alert('completado ')
        this.currentColor = '00CD56'
      }
      if(this.count > 4 && this.count < 8){
        // alert('mayor a 14 y menor a 20')
        this.currentColor = 'F4EB49'
      }
      if(this.count < 2){
        // alert('no ha terminado')
        this.currentColor = 'F1191C'
      }
      document.getElementById('imgshow').src=url_src;


          
    }
  }
};

      
</script>

<style scoped>
main {
  background: var(--vt-c-naranja);
}
#imgshow {
  width: 300px;
}
.letters-c {
  width: 70%;
  margin: 20px auto;
  background: var(--vt-c-blanco);
  padding: 10px 0;
  border-radius: 10px;
  height: 250px;
  overflow: scroll;
}
.letters-c::-webkit-scrollbar {
  background: transparent;
  width: 10px;
}
.letters-c::-webkit-scrollbar-thumb {
  width: 3px;
  background-color: var(--vt-c-naranja);
  border-radius: 10px;
}
.letter-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid var(--vt-c-negro);
}
.letter-item svg {
  width: 32px;
  height: 32px;
}
.letter-item.active {
  background: var(--vt-c-verde-lima);
  pointer-events: none;
}
</style>
