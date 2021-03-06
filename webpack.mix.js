const mix = require('laravel-mix');
require('dotenv').load();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js').sass('resources/sass/currencies.scss','public/css').postCss('resources/css/app.css','public/css',[
  require('tailwindcss')
])
mix.js('resources/js/axios.js','public/js')
  // .sass('resources/sass/app.scss', 'public/css');
mix.browserSync('beautypagent.local')

