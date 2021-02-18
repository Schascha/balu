module.exports = {
	chainWebpack: (config) => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Balu';
				args[0].meta = {
					url: 'https://schascha.github.io/balu/',
					description: 'Just a baby name inspiration tool'
				};
				return args;
			});
	},

	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import '@schascha/sassy-mixins';
					@import '@/scss/variables';
					@import '@/scss/mixins';
					`
			}
		}
	},

	pluginOptions: {
		i18n: {
			locales: ['de', 'en'],
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
