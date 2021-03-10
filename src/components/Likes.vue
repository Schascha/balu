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
			</li>
		</ul>
		<p v-else>
			{{ $t('likes.empty') }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		likes: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
	@import '@/scss/components/likes';
</style>
