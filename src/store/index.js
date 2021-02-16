import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allNames: [],
		child: '',
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
		}
	}
});
