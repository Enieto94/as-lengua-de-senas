import Vue from "vue";
import Vuex from "vuex"
import { createStore } from 'vuex';
export const store = new Vuex.Store(Vue);


export default createStore({
	state: {
		characters: [],
		charactersFilter: [],
		setTrue: Boolean
	},
	mutations: {
		setCharacters(state, payload) {
			state.characters = payload
		},
		setCharactersFilter(state, payload) {
			state.charactersFilter = payload
		}

	},
	actions: {
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
		filterByName({ commit, state }, name) {
			const formatName = name.toLowerCase()
			const results = state.characters.filter((character) => {
				const characterName = character.nom_letra.toLowerCase()

				if (characterName.includes(formatName)) {
					return character
				}
			})

			commit('setCharactersFilter', results)
		}
	},
	modules: {
	}
})