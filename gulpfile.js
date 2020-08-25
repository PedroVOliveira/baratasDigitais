// Adiciona todos os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// Compila os arquivos sass e adiciona prefixos a ele
function compilerSass() {
    return gulp
    .src('src/assets/css/scss/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(gulp.dest('src/dist/css/'))
    // Serve para dar o hard reload no css
    .pipe(browserSync.stream());
}
// Função de compressão de js

// Tarefa do gulp para a função do scss
// gulp.task('sass',function(done){
//     compilerSass()
//     done()
// });

exports.compilerSass = compilerSass;

function gulpJS() {
    return gulp.src('src/assets/js/**/*.js')
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('src/dist/js/'))
    .pipe(browserSync.stream())
}
exports.gulpJS = gulpJS;

// function pluginJS() {
//     return gulp
//     .src(
//         [
            
//             'js/plugins/*.js'
//         ])
//     .pipe(concat('plugins.js'))
//     .pipe(gulp.dest('js/'))
//     .pipe(browserSync.stream())
// }

// exports.pluginJS = pluginJS; 

function browser() {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
}
// Tarefa que faz o live reload na pag
// gulp.task('browser-sync',browser);
exports.browser = browser;

// Função de watch do gulp
function watch() {
    // injeta os arquivos css no sync
    gulp.watch('src/assets/css/scss/**/*.scss',compilerSass)
    // gulp.watch('src/assets/js/plugins/**/*.js', pluginJS)
    gulp.watch('src/assets/js/**/*.js', gulpJS).on('change',browserSync.reload);
    // Da o reload no html
    gulp.watch('*.html').on('change',browserSync.reload);
}

// Inicia a tarefa wath
// gulp.task('watch',watch);
exports.watch = watch;

// Tarefa padrão. Executa ao mesmo tempo as duas tarefas
// gulp.task('default',gulp.parallel('watch','browser-sync',compilerSass,'mainjs','pluginjs'));
exports.default = gulp.parallel(watch, browser, compilerSass, gulpJS,)