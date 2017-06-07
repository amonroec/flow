let mix = require('laravel-mix');
var path = require('path');
var projectRoot = path.resolve(__dirname, '../')
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
var vendors = "node_modules/";
var destCss = "public/css/";
var destJs = "public/js/";

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
});
// ========copy images=====
mix.copy('resources/assets/js/components/assets/img', 'public/img');

// ========copy fonts=====
mix.copy('resources/assets/fonts', 'public/fonts');

// ========copy js=====
mix.copy('resources/assets/js/components/assets/js', 'public/js/custom.js');

// =======mix styles======
mix.sass('resources/assets/js/components/assets/sass/bootstrap/bootstrap.scss', 'public/css/');
mix.sass('resources/assets/sass/custom.scss', 'public/css/');
mix.sass('resources/assets/sass/app.scss', 'public/css/');
// =====join js files====
mix.js('resources/assets/js/app.js', 'public/js/app.js');
mix.js('resources/assets/js/components/main.js', 'public/js/main.js');




// =====webpack========

mix.webpackConfig({
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            'vue$': 'vue/dist/vue.js',
            'src': path.resolve(__dirname, './resources'),
            'assets': path.resolve(__dirname, './resources/assets'),
            'components': path.resolve(__dirname, './resources/assets/js/components')
        }
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          include: projectRoot,
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json'
        }
      ]
    }
});
