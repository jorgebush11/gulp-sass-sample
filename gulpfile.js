const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function styles(){
    return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest('./css'))
}

//function devWatch(){
//   watch('./sass/**/*.scss', styles);
//}

function devWatch(){
    browserSync.init({
        server: { baseDir: './' }
    })
    watch('./sass/**/*.scss', series('styles'));
    watch('./*.html').on('change', browserSync.reload);
    watch('./css/*.css').on('change', browserSync.reload);
}

exports.styles = styles;
exports.devWatch = devWatch;