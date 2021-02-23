<template>
	<div :class="['child', (gender !== 'both') && gender]">
		<div class="child-bg" />

		<h2>
			{{ $t('description') }}
		</h2>

		<p :class="['child-name', child.gender]">
			{{ child.name }}
			<IconBoy v-if="child.gender === 'boy'" />
			<IconGirl v-if="child.gender === 'girl'" />
		</p>

		<Heart
			:active="likes && likes.includes(child.name)"
			@click="onLike"
		/>
		<br>

		<GenderSwitch v-model="toggle" />
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
import GenderSwitch from '@/components/GenderSwitch';
import Heart from '@/components/Heart';
import IconBoy from '@/assets/icons/boy.svg?inline';
import IconGirl from '@/assets/icons/girl.svg?inline';

export default {
	components: {
		GenderSwitch,
		Heart,
		IconBoy,
		IconGirl,
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
		},
		likes() {
			return this.$store.state.likes;
		},
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
		this.$store.dispatch('getChild', this.$route.params.name && {
			name: this.$route.params.name
		});

		document.addEventListener('keydown', this.onKeypress);
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.onKeypress);
	},
	methods: {
		onClick() {
			this.$store.dispatch('getChild');
		},
		onLike() {
			this.$store.dispatch('like');
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
