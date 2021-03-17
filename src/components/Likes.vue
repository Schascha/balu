<template>
	<div class="likes">
		<ul
			v-if="likes && likes.length"
			class="likes-list"
		>
			<li
				v-for="like in likes"
				:key="like"
				class="likes-item"
			>
				{{ like }}

				<Heart
					:active="true"
					class="is-small"
					@click="onLike(like)"
				/>
			</li>
		</ul>
		<p v-else>
			<router-link to="/">
				{{ $t('likes.empty') }}
			</router-link>
		</p>
	</div>
</template>

<script>
import Heart from '@/components/Heart';

export default {
	components: {
		Heart,
	},
	props: {
		likes: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		onLike(e) {
			this.$store.dispatch('like', e);
		},
	}
};
</script>

<style lang="scss" scoped>
	@import '@/scss/components/likes';
</style>
