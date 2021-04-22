const mix = require('laravel-mix');

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

mix.browserSync('laravel-vue-blog-backup.blog');

// mix.styles([
//     'resources/css/cssTemplate/linearicons.css',
//     'resources/css/cssTemplate/font-awesome.min.css',
//     'resources/css/cssTemplate/magnific-popup.css',
//     'resources/css/cssTemplate/nice-select.css',
//     'resources/css/cssTemplate/owl.carousel.css',
//     'resources/css/cssTemplate/bootstrap.css',
//     'resources/css/cssTemplate/bootstrap-datepicker.css',
//     'resources/css/cssTemplate/themify-icons.css',
//     'resources/css/cssTemplate/main.css'
// ], 'public/css/styles.css');




// mix.scripts([
//     'resources/scripts/admin/layout/layout.min.js'
// ], 'public/js/admin/script.js' )
// mix.scripts([
//     'resources/scripts/vendor/jquery-2.2.4.min.js',
//     'resources/scripts/vendor/bootstrap.min.js',
//     'resources/scripts/owl.carousel.min.js',
//     'resources/scripts/jquery.sticky.js',
//     'resources/scripts/jquery.tabs.min.js',
//     'resources/scripts/parallax.min.js',
//     'resources/scripts/jquery.nice-select.min.js',
//     'resources/scripts/jquery.ajaxchimp.min.js',
//     'resources/scripts/jquery.magnific-popup.min.js',
//     'resources/scripts/bootstrap-datepicker.js',
//     'resources/scripts/main.js'
// ], 'public/js/scripts.js')

// mix.copyDirectory('resources/img', 'public/img');
// mix.copyDirectory('resources/fonts', 'public/fonts');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

// mix.scripts([
//     'resources/scripts/vendor/jquery-2.2.4.min.js',
//     'resources/scripts/vendor/bootstrap.min.js',
//     'resources/scripts/owl.carousel.min.js',
//     'resources/scripts/jquery.sticky.js',
//     'resources/scripts/jquery.tabs.min.js',
//     'resources/scripts/parallax.min.js',
//     'resources/scripts/jquery.nice-select.min.js',
//     'resources/scripts/jquery.ajaxchimp.min.js',
//     'resources/scripts/jquery.magnific-popup.min.js',
//     'resources/scripts/bootstrap-datepicker.js',
//     'resources/scripts/main.js'
// ], 'resources/Vue/js/blog/index.js')
