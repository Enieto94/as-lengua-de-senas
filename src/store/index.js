import Vue from "vue";
import Vuex from "vuex"
import { createStore } from 'vuex';
export const store = new Vuex.Store(Vue);

export default createStore({
	state: {
		characters: [],
		charactersFilter: [],
		colors: [],
		numbers: [],
		numbersFilter: [],
		colorsFilter: [],
		presentaciones: [],
		presentacionesFilter: [],
		verbosFilter: [],
		verbos: [],
		preguntas: [],
		preguntasFilter: [],
		letrasAprobado: false,
		coloresAprobado: false,
		numerosAprobado: false
	},
	mutations: {
		aproboLetras(state) {
			state.letrasAprobado = true
		}
		,
		setCharacters(state, payload) {
			state.characters = payload
		},
		setNumbers(state, payload) {
			state.numbers = payload
		},
		setPresentaciones(state, payload) {
			state.presentaciones = payload
		},
		setPreguntas(state, payload) {
			state.preguntas = payload
		},

		setVerbos(state, payload) {
			state.verbos = payload
		},
		setCharactersFilter(state, payload) {
			state.charactersFilter = payload
		},
		setNumbersFilter(state, payload) {
			state.numbersFilter = payload
		},
		setColors(state, payload) {
			state.colors = payload
		},
		setColorsFilter(state, payload) {
			state.colorsFilter = payload
		},
		setPreguntasFilter(state, payload) {
			state.preguntasFilter = payload
		},
		setPresentacionesFilter(state, payload) {
			state.presentacionesFilter = payload
		},
		setVerbosFilter(state, payload) {
			state.verbosFilter = payload
		}

	},
	actions: {
		aproboLetras(context) {
			context.commit('aproboLetras');
		},
		async getColores({ commit }) {

			try {
				const response = await fetch('http://127.0.0.1:8000/api/colores')
				const data = await response.json()
				commit('setColors', data)
				commit('setColorsFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		async getCharacters({ commit }) {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/temas')
				const data = await response.json()
				commit('setCharacters', data)
				commit('setCharactersFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		async getNumbers({ commit }) {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/numeros')
				const data = await response.json()
				commit('setNumbers', data)
				commit('setNumbersFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		async getPreguntas({ commit }) {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/pregunta')
				const data = await response.json()
				commit('setPreguntas', data)
				commit('setPreguntasFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		async getPresentaciones({ commit }) {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/presentacion')
				const data = await response.json()
				commit('setPresentaciones', data)
				commit('setPresentacionesFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		async getVerbos({ commit }) {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/verbo')
				const data = await response.json()
				commit('setVerbos', data)
				commit('setVerbosFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		},
		filterByVerbo({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.verbos.filter((verbo) => {
				const verboName = verbo.nom_letra.toLowerCase()

				if (verboName.includes(formatName)) {
					return verbo
				}
			})

			commit('setVerbosFilter', results)
		},
		filterByPresentacion({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.presentaciones.filter((presentacion) => {
				const presentacionName = presentacion.nom_letra.toLowerCase()

				if (presentacionName.includes(formatName)) {
					return presentacion
				}
			})

			commit('setPresentacionesFilter', results)
		},
		filterByPregunta({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.preguntas.filter((pregunta) => {
				const preguntaName = pregunta.nom_letra.toLowerCase()

				if (preguntaName.includes(formatName)) {
					return pregunta
				}
			})

			commit('setPreguntasFilter', results)
		},
		filterByName({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.characters.filter((character) => {
				const characterName = character.nom_letra.toLowerCase()

				if (characterName.includes(formatName)) {
					return character
				}
			})

			commit('setCharactersFilter', results)
		},
		filterByColor({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.colors.filter((color) => {
				const colorName = color.nom_color.toLowerCase()

				if (colorName.includes(formatName)) {
					return color
				}
			})

			commit('setColorsFilter', results)
		},
		filterByNumber({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.numbers.filter((number) => {
				const numberName = number.nom_letra.toLowerCase()

				if (numberName.includes(formatName)) {
					return number
				}
			})

			commit('setNumbersFilter', results)
		}
	},
	modules: {
	},
})