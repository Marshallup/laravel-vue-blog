const mix = require('laravel-mix');
// const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
// const CKEStyles = require('@ckeditor/ckeditor5-dev-utils').styles
// const CKERegex = {
//     svg: '/ckeditor5-[^/\]+[/\]theme[/\]icons[/\][^/\]+\.svg$/',
//     css: '/ckeditor5-[^/\]+[/\]theme[/\].+\.css$/'
// }
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

mix.browserSync({
    proxy: 'laravel-vue-blog-backup.blog',
    open: false
});


// Mix.listen('configReady', webpackConfig => {
//     const rules = webpackConfig.module.rules
//     const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/
//     const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/
//     const targetCSS = /\.css$/
//
//     // Exclude CK Editor regex from mix's default rules
//     for (let rule of rules) {
//         if (rule.test.toString() === targetSVG.toString()) {
//             rule.exclude = CKERegex.svg
//         } else if (rule.test.toString() === targetFont.toString()) {
//             rule.exclude = CKERegex.svg
//         } else if (rule.test.toString() === targetCSS.toString()) {
//             rule.exclude = CKERegex.css
//         }
//     }
// })
//
//
//
// mix.webpackConfig({
//     module: {
//         rules: [
//             {
//                 test: CKERegex.svg,
//                 use: ['raw-loader']
//             },
//             {
//                 test: CKERegex.css,
//                 use: [
//                     {
//                         loader: 'postcss-loader',
//                         options: {
//                             postcssOptions: CKEStyles.getPostCssConfig({
//                                 themeImporter: {
//                                     themePath: './node_modules/@ckeditor/ckeditor5-theme-lark'
//                                 },
//                                 minify: true
//                             })
//                         }
//                     }
//                 ]
//             }
//         ]
//     }
// })




// mix.webpackConfig(webpack => {
//     return {
//         plugins: [
//             new CKEditorWebpackPlugin( {
//                 // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
//                 language: 'en',
//                 // addMainLanguageTranslationsToAllAssets: true,
//                 // translationsOutputFile: /lang/
//                 buildAllTranslationsToSeparateFiles: true,
//                 additionalLanguages: 'all',
//             } )
//         ]
//     };
// });






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
