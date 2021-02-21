<template>
	<button
		:class="['heart', {'is-active': active}]"
		:title="$t('button.heart')"
		type="button"
		@click="onClick"
	>
		<span>{{ $t('button.heart') }}</span>
		<i />
	</button>
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onClick() {
			this.$emit('click', !this.active);
		}
	}
};
</script>

<style lang="scss" scoped>
	@import '@/scss/components/heart';
</style>
