<template>
	<div class="frame">
		<header>
			<h1>
				<router-link to="/">
					{{ $t('title') }}
				</router-link>
			</h1>
			<nav>
				<router-link :to="{name: 'Likes'}">
					{{ $t('router.likes') }}
				</router-link>
			</nav>
		</header>

		<main>
			<router-view />
		</main>

		<footer>
			<div>
				<a
					:href="$t('link.github.href')"
					:title="$t('link.github.title')"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconGitHub />
				</a>
				<Language />
			</div>
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg?inline';
	import Language from '@/components/Language';

	export default {
		name: 'App',
		components: {
			IconGitHub,
			Language
		},
		created() {
			this.$store.dispatch('getAllNames');
			this.$store.dispatch('getLikes');
		}
	};
</script>

<style lang="scss">
	@import '@/scss/layout';
</style>
