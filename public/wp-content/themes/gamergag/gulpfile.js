var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var processors = [
	precss(),
    autoprefixer()
];

gulp.task('styles', function () {
    return gulp.src('./assets/stylesheets/postcss/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/stylesheets'));
});

gulp.task('watch', function() {
	gulp.watch('**/*.css', ['styles']);
})