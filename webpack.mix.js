const { mix } = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.setPublicPath('./');

mix
	.sass('resources/assets/sass/app.scss', 'web/assets/css/app.css')
	.js('resources/assets/js/app.js', 'web/assets/js/app.js')
	.browserSync({
		proxy: 'http://weat_dotallexample.test/',
		files: ["web/assets/css/*", "web/assets/js/**", "craft/templates/**"]
	})
	.version()
	.sourceMaps()
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.js')],
	});

