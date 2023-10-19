import Vue from "vue";
import Vuex from "vuex"
import { createStore } from 'vuex';
export const store = new Vuex.Store(Vue);

export default createStore({
	state: {
		characters: [],
		charactersFilter: [],
		colors: [],
		colorsFilter: [],
		presentaciones: [],
		presentacionesFilter: [],
		verbos: [],
		preguntas: [],
		preguntasFilter: [],
		setTrue: Boolean
	},
	mutations: {
		setCharacters(state, payload) {
			state.characters = payload
		},
		setPresentaciones(state, payload) {
			state.characters = payload
		},
		setPreguntas(state, payload) {
			state.characters = payload
		},

		setVerbos(state, payload) {
			state.characters = payload
		},
		setCharactersFilter(state, payload) {
			state.charactersFilter = payload
		},
		setColors(state, payload) {
			state.colors = payload
		},
		setColorsFilter(state, payload) {
			state.colorsFilter = payload
		},
		setPreguntasFilter(state, payload) {
			state.charactersFilter = payload
		},
		setPresentacionesFilter(state, payload) {
			state.charactersFilter = payload
		},

	},
	actions: {
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
				commit('setCharacters', data)
				commit('setCharactersFilter', data)
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
				commit('setCharactersFilter', data)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

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
		}
	},
	modules: {
	}
})