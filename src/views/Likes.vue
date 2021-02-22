<template>
	<div :class="['likes', {'is-long': likes.length >= 8}]">
		<ul v-if="likes && likes.length">
			<li
				v-for="like in likes"
				:key="like"
			>
				{{ like }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		likes() {
			return this.$store.state.likes;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import '@/scss/components/likes';
</style>
