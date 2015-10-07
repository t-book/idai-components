var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var pkg = require('./package.json');

var paths = {
    'bootstrap': './bower_components/bootstrap-sass/assets/'
};

gulp.task('sass', function() {
  return gulp.src('src/scss/theme.scss')
  	.pipe(sass({includePaths: [paths.bootstrap + 'stylesheets/'], precision: 8}))
  	.pipe(concat(pkg.name + '.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('minify-css', function() {
	return gulp.src('dist/css/*.css')
		.pipe(minifyCss())
  	.pipe(concat(pkg.name + '.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('concat-js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(concat(pkg.name + '.js'))
		.pipe(gulp.dest('dist'))
    .pipe(reload({ stream:true }));
});

gulp.task('minify-js', function() {
	return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('server', ['sass', 'concat-js'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['concat-js']);

  gulp.watch(['**/*.html', 'js/**/*.js'], reload);
});

gulp.task('default', function() {
  // place code for your default task here
});