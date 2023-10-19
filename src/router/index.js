import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'inicio',
			component: HomeView
		},
		{
			path: '/juego',
			name: 'juego',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/JuegoView.vue')
		},
		{
			path: '/quiz',
			name: 'quiz',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizView.vue')
		},
		{
			path: '/quiznumeros',
			name: 'quiznumeros',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizNumeros.vue')
		},
		{
			path: '/quizcolores',
			name: 'quizcolores',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizColores.vue')
		},
		{
			path: '/quizpreguntas',
			name: 'quizpreguntas',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizPreguntas.vue')
		},
		{
			path: '/quizpresentaciones',
			name: 'quizpresentaciones',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizPresentaciones.vue')
		},
		{
			path: '/quizverbos',
			name: 'quizverbos',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/QuizVerbos.vue')
		},
		{
			path: '/temas',
			name: 'temas',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/TemasView.vue')
		},
		{
			path: '/letras',
			name: 'letras',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/LetrasView.vue')
		},
		{
			path: '/numeros',
			name: 'numeros',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/NumerosView.vue')
		},
		{
			path: '/colores',
			name: 'colores',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/ColoresView.vue')
		}
		,
		{
			path: '/preguntas',
			name: 'preguntas',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/PreguntasView.vue')
		}
		,
		{
			path: '/presentacion',
			name: 'presentacion',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/PresentacionView.vue')
		}
		,
		{
			path: '/verbos',
			name: 'verbos',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/VerbosView.vue')
		}
	]
})

export default router