import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allNames: [],
		child: [],
		likes: [],
		memory: [],
		memoryIndex: 0,
		names: [],
		gender: 'both'
	},
	mutations: {
		setGender(state, gender) {
			state.gender = gender;

			if (gender !== 'both') {
				state.names = state.allNames.filter(el => [gender, 'both'].includes(el.gender));
			} else {
				state.names = state.allNames;
			}
		},
		setAllNames(state, allNames) {
			state.allNames = state.names = allNames;
		},
		setChild(state, child) {
			state.child = child;
		},
		pushChild(state, child) {
			const
				{names} = state
			;

			// Create random child item
			if (!child) {
				child = names[parseInt(Math.random() * names.length)];
			}

			state.memory.push(child);
			state.memoryIndex = state.memory.length - 1;
			state.child = child;
		},
		setLike(state, data) {
			const
				{child, likes} = state,
				index = likes.indexOf(data || child.name)
			;

			if (index > -1) {
				likes.splice(index, 1);
			} else {
				likes.push(child.name);
			}

			window.localStorage.setItem('likes', JSON.stringify(likes));
		},
		setLikes(state) {
			const json = JSON.parse(window.localStorage.getItem('likes'));

			if (Array.isArray(json)) {
				state.likes = json;
			}
		}
	},
	actions: {
		getAllNames({commit}) {
			commit('setAllNames', require('@/data/names.json'));
		},
		getChild({commit, state}, data) {
			if (data && data.name) {
				commit('pushChild', state.allNames.find(el => el.name === data.name));
			} else {
				commit('pushChild');
			}
		},
		getNextName({commit, state}) {
			const
				{memory} = state,
				size = memory.length
			;

			if (size && ++state.memoryIndex < size) {
				commit('setChild', memory[state.memoryIndex]);
			} else {
				commit('pushChild');
			}
		},
		getPrevName({commit, state}) {
			if (state.memoryIndex) {
				commit('setChild', state.memory[--state.memoryIndex]);
			}
		},
		getLikes({commit}) {
			commit('setLikes');
		},
		like({commit}, data) {
			commit('setLike', data);
		}
	}
});
