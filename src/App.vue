<template>
	<div class="frame">
		<header>
			<h1>
				{{ $t('title') }}
			</h1>

			<!-- <nav>
				<router-link to="/">
					Home
				</router-link>
				<router-link to="/about">
					About
				</router-link>
			</nav> -->
		</header>

		<router-view />

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
		}
	};
</script>

<style lang="scss">
	@import '@/scss/layout';
</style>
