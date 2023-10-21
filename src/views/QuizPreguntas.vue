<template>
  <MenuAtrasTop></MenuAtrasTop>
    <main>
        <h1>QUIZ PREGUNTAS ASL </h1>
        <div v-if="!repaso">
            <h2>REPASO</h2>
            <center>
                <video  src="https://apiasl.netlify.app/src/img/repaso/preguintas.mp4" autoplay="true"  muted></video>
            </center>

            <center>
                <h4>¿Estás listo para el test?</h4>
                <RouterLink to="/temas">
                    <button  class="btn-test" ><svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-octagon</title><path fill="var(--vt-c-danger)" d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41" /></svg></button>
                </RouterLink>
                <button @click="ContinuarQuiz" class="btn-test" ><svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-decagram</title><path fill="var(--vt-c-success)" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg></button>
            </center>
        </div>
        <div v-if="repaso">
            <section class="quiz" v-if="!quizCompleted">
                <center>
                    <progress id="file" max="100" :value="score*10" >  </progress>
                </center>
                <div class="quiz-info">
                    <img class="question" :src="getCurrentQuestion.question">
                    
                    <div>{{ value }}</div>
                </div>

                <div class="options">
                    <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :class="`option ${
                        getCurrentQuestion.selected == index
                        ? index == getCurrentQuestion.answer
                        ? 'correct'
                        :'wrong' : ''
                    }${
                        getCurrentQuestion.selected != null &&
                        index != getCurrentQuestion.selected
                        ? 'disabled'
                        : ''
                    }`">
                    <input type="radio" :name="getCurrentQuestion.index" :value="index" v-model="getCurrentQuestion.selected" :disabled="getCurrentQuestion.selected" @change="SetAnswer">
                    <span>{{ option }}</span>
                    
                    </label>
                </div>
                <center>
                    <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
                        {{ 
                            getCurrentQuestion.index == questions.length -1 
                            ? 'Finalizar y enviar'
                            :getCurrentQuestion.selected == null 
                            ? 'Selecciona una opción...'
                            : 'Siguiente pregunta'
                        }}
                    </button>
                </center>
            </section>
            <section v-else class="c-puntaje">
                <h2>
                    Has terminado el examen
                </h2>
                    <h3>¡Tu Puntaje!</h3>
                    <br>
                <p>
                    
                    <span class="score">
                    {{ score }} / {{ questions.length }}
                    </span>

                </p>
                <div v-if="score>7">
                    <h4>¡LO LOGRASTE! FELICIDADES</h4> <br><br>
                    <img  src="https://cdn.dribbble.com/users/1884546/screenshots/4969286/media/328f91c38b48d3d9904737088774df96.gif" alt="">
                </div>
                <br><br>
                <div v-if="score<7">
                    <h4>Lo lamentamos, ¡Sigue estudiando!</h4>
                    <br><br>
                    <img  src="https://media.tenor.com/IwSe7sBQluoAAAAC/perdimos-derrota.gif" alt="">
                    <RouterLink to="/preguntas">
                    <button>Vuelve a repasar</button></RouterLink>
                </div>
            
            </section>
        </div>
    </main>
  <MenuView></MenuView>

</template>

<script setup>

// import { onMounted, computed } from "vue";
import { ref, computed } from "vue";
import MenuView from "../views/MenuView.vue";
import MenuAtrasTop from "../components/MenuAtrasTop.vue";

  const questions = ref([
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Como estas.gif",
            answer: 2,
            options: [
                '¿Cómo te llamas?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Como te llamas.gif",
            answer: 0,
            options: [
                '¿Cómo te llamas?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Cuantos años tiens.gif",
            answer: 0,
            options: [
                '¿Cuantos años tienes?',
                '¿Cómo te llamas?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Donde Vives.gif",
            answer: 0,
            options: [
                '¿Dónde vives?',
                '¿Cómo te llamas?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Que haces.gif",
            answer: 0,
            options: [
                '¿Qué haces?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Que hora es.gif",
            answer: 1,
            options: [
                '¿Cómo te llamas?',
                '¿Qué hora es?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Que te gusta hacer en tu tiempo libre.gif",
            answer: 2,
            options: [
                '¿Cómo te llamas?',
                '¿Cuantos años tienes?',
                '¿Qué te gusta hacer en tu tiempo libre?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Tienes hambre.gif",
            answer: 0,
            options: [
                '¿Tienes hambre?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Tienes hermanos o hermanas.gif",
            answer: 1,
            options: [
                '¿Tienes hambre?',
                '¿Tienes hermanos o hermanas?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },
        {
            question: "https://apiasl.netlify.app/src/img/preguntas/Tu donde Trabajas o Estudias.gif",
            answer: 0,
            options: [
                '¿Tú dónde trabajas o estudias?',
                '¿Cuantos años tienes?',
                '¿Cómo estás?',
                '¿Dónde vives?'
            ],
            selected: null
        },

    ])
    const quizCompleted = ref(false);
    const currentQuestion =  ref(0);
    const repaso =ref(false);
    const score = computed(() => {
        let value = 0
        questions.value.map(q => {
            if(q.selected == q.answer){
                value++
            }
        })

        return value
    })

    const getCurrentQuestion = computed(() => {
        let question = questions.value[currentQuestion.value]
        question.index = currentQuestion.value
        return question
    })

    const SetAnswer = e => {
        questions.value[currentQuestion.value].selected = e.target.value
        e.target.value = null
    }
    
    const NextQuestion = () => {
        if(currentQuestion.value < questions.value.length -1){
            currentQuestion.value++
            return
        }
        quizCompleted.value = true
    }
    const ContinuarQuiz = () => {
        repaso.value = true
    }

</script>



<style scoped>
h2 {
    text-align: center;
    color: var(--vt-c-naranja)
}

span.score {
    background: #fff;
    border-radius: 25px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    padding: 15px 5px;
}
video {
    width: 300px;
    border-radius: 15px;
}
main{
    background:#BFDB38;
}
.c-puntaje {
    text-align: center;
}
img.question, img {
    width: 300px;
}

.options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.options .option{
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    background: var(--vt-c-verde);
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    border-radius: 25px;
    box-shadow: 0px 2px 3px solid var(--vt-c-negro);

}

.option span {
    color: #fff !important;
    text-transform: uppercase;

}

.option input {
    display: none;
}

button {
    padding: 10px 30px;
    margin: 20px 0;
    border-radius: 25px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    background: var(--vt-c-naranja);
}
.btn-test {
    background: var(--vt-c-blanco)
}
::-webkit-progress-bar {
   background-color: var(--vt-c-naranja);
}
.quiz-info {
    display: flex;
    justify-content: center;
}
</style>