module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import '@/scss/variables';
					@import '@/scss/mixins';
					`
			}
		}
	},

	pluginOptions: {
		i18n: {
			locales: ['de'],
			fallbackLocale: 'de',
			localeDir: 'locales',
			enableInSFC: true
		}
	},

	publicPath: process.env.NODE_ENV === 'production' ?
		'/balu/' :
		'/',

	pwa: {
		name: 'Balu',
		themeColor: '#33838F',
		manifestOptions: {
			background_color: '#fff',
		},
		workboxOptions: {
			exclude: [
				/\.map$/,
				/manifest\.json$/
			],
			runtimeCaching: [
				{
					urlPattern: 'https://fonts.googleapis.com/.*',
					handler: 'cacheFirst',
					method: 'GET'
				}
			]
		}
	},
};
