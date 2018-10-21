var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dev"
    });

    gulp.watch("dev/scss/**/*.scss", ['sass']);
    gulp.watch("dev/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("dev/scss/**/*.scss")
        .pipe(plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);

            }}))
        .pipe(sass())
        .pipe(gulp.dest("dev/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);