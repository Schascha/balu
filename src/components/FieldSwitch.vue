<template>
	<div class="field-switch">
		<!-- Start -->
		<label
			for="start"
			@click="toggle = 0"
		/>
		<input
			id="start"
			type="radio"
			name="choice_radio"
			class="start"
			:checked="(toggle === 0) && 'checked'"
		>

		<!-- Center -->
		<label
			for="center"
			@click="toggle = 1"
		/>
		<input
			id="center"
			type="radio"
			name="choice_radio"
			class="center"
			:checked="(toggle === 1) && 'checked'"
		>

		<!-- End -->
		<label
			for="end"
			@click="toggle = 2"
		/>
		<input
			id="end"
			type="radio"
			name="choice_radio"
			class="end"
			:checked="(toggle === 2) && 'checked'"
		>

		<!-- Toggle -->
		<div class="toggle">
			<IconGender />
		</div>
	</div>
</template>

<script>
import IconGender from '@/assets/icons/gender.svg?inline';

export default {
	components: {
		IconGender
	},
	data() {
		return {
			toggle: 1
		};
	},
	watch: {
		toggle() {
			this.$emit('input', this.toggle);
		}
	}
};
</script>

<style lang="scss" scoped>
	@import '@/scss/components/field-switch';
</style>
