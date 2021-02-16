<template>
	<div :class="['child', (gender !== 'both') && gender]">
		<div class="child-bg" />

		<h2>
			{{ $t('description') }}
		</h2>

		<p :class="['child-name', child.gender]">
			{{ child.name }}
		</p>

		<FieldSwitch v-model="toggle" />
		<br>
		<button
			type="button"
			@click="onClick"
		>
			{{ $t('button.new') }}
		</button>
	</div>
</template>

<script>
import FieldSwitch from '@/components/FieldSwitch';

export default {
	name: 'ChildName',
	components: {
		FieldSwitch
	},
	data() {
		return {
			toggle: 1
		};
	},
	computed: {
		child() {
			return this.$store.state.child;
		},
		gender() {
			const
				gender = (this.toggle === 0) ? 'boy'
					: (this.toggle === 2) ? 'girl'
					: 'both'
			;

			this.$store.commit('setGender', gender);
			return gender;
		}
	},
	watch: {
		child(value) {
			this.$router && this.$router.push({name: 'Child', params: {name: value.name}}).catch(()=>{});
		},
		$route(to) {
			const {name} = to.params;

			if (name && name !== this.child.name) {
				this.$store.dispatch('getChild', {
					name: name
				});
			}
		}
	},
	created() {
		this.$store.dispatch('getAllNames');

		if (this.$route.params.name) {
			this.$store.dispatch('getChild', {
				name: this.$route.params.name
			});
		}

		if (!this.child) {
			this.$store.dispatch('getChild');
		}

		document.addEventListener('keydown', this.onKeypress);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.onKeypress);
	},
	methods: {
		onClick() {
			this.$store.dispatch('getChild');
		},
		onKeypress(e) {
			if (e.target.type) {
				return;
			}

			// Left arrow
			if (e.keyCode === 37) {
				this.$store.dispatch('getPrevName');
			}

			// Right arrow
			if (e.keyCode === 39) {
				this.$store.dispatch('getNextName');
			}
		}
	},

};
</script>

<style scoped lang="scss">
	@import '@/scss/components/child';
</style>
