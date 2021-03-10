<template>
	<Likes :likes="likes" />
</template>

<script>
import Likes from '@/components/Likes';

export default {
	components: {
		Likes
	},
	computed: {
		likes() {
			return this.$store.state.likes;
		}
	}
};
</script>
