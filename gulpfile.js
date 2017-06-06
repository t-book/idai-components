var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;;
var modRewrite = require('connect-modrewrite');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var Server = require('karma').Server;
var replace = require('gulp-replace');
var babel = require('gulp-babel');

var pkg = require('./package.json');

var paths = {
	'build': 'dist/',
	'lib': 'node_modules/',
	'bootstrap': 'node_modules/bootstrap-sass/assets/',
	'bower': 'bower_components/',
	'geonode': 'geonode_src/'
};

// compile sass and concatenate to single css file in build dir
gulp.task('sass', function() {
	return gulp.src('src/idai-components.scss')
	  	.pipe(sass({includePaths: [paths.bootstrap + 'stylesheets/'], precision: 8}))
	  	.pipe(concat(pkg.name + '.css'))
	    .pipe(gulp.dest(paths.build + '/css'))
	    .pipe(reload({ stream:true }));
});

// minify css files in build dir
gulp.task('minify-css', ['sass'], function() {
	return gulp.src([
		paths.build + '/css/*.css',
		paths.bower + 'select2/dist/css/select2.css',
		])
		.pipe(minifyCss())
  		.pipe(concat(pkg.name + '.min.css'))
		.pipe(gulp.dest(paths.build + '/css'));
});

// minify leaflet css files in bower dir
gulp.task('minify-leaflet-css', function() {
	return gulp.src([
            paths.bower + 'leaflet/dist/leaflet.css', 
            paths.bower + 'leaflet-fullscreen/dist/leaflet.fullscreen.css',
            paths.bower + 'Leaflet.ZoomBox/L.Control.ZoomBox.css',
            paths.bower + 'leaflet-measure/dist/leaflet-measure.css',
            paths.bower + 'Leaflet.NavBar/src/Leaflet.NavBar.css',
            paths.bower + 'Leaflet.Coordinates/src/Control.Coordinates.css',
            paths.geonode + 'css/idai-leafletstyles.css'
		])
		.pipe(replace('img/', '../img/'))
		.pipe(replace('images/', '../img/'))
		.pipe(replace('fullscreen.png', '../img/fullscreen.png'))
		.pipe(minifyCss())
  		.pipe(concat('idai-leaflet.min.css'))
		.pipe(gulp.dest(paths.build + '/css'));
});


// concatenates all js files in src into a single file in build dir
gulp.task('concat-js', function() {
	return gulp.src(['src/_modules-and-constants.js','src/**/*.js'])
		.pipe(concat(pkg.name + '-no-tpls.js'))
		.pipe(gulp.dest(paths.build + '/js'))
    	.pipe(reload({ stream:true }));
});

// concatenates and minifies all dependecies into a single file in build dir
gulp.task('concat-deps', function() {
	return gulp.src([
			paths.lib + 'angular/angular.min.js',
			paths.lib + 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
			paths.lib + 'angular-route/angular-route.min.js',
			paths.lib + 'angular-animate/angular-animate.min.js'
		])
		.pipe(concat(pkg.name + '-deps.js'))
    	.pipe(uglify())
		.pipe(gulp.dest(paths.build + '/js'));
});

// concatenates and minifies all leaflet dependecies into a single file 
gulp.task('concat-leaflet-js', function(){
    return gulp.src([
                paths.bower + 'leaflet/dist/leaflet-src.js', 
                paths.bower + 'leaflet-fullscreen/dist/leaflet.fullscreen.js',
                paths.bower + 'Leaflet.ZoomBox/L.Control.ZoomBox.js',
                paths.bower + 'leaflet-measure/dist/leaflet-measure.js',
                paths.bower + 'leaflet.wms/src/leaflet.wms.js',
                paths.bower + 'Leaflet.NavBar/src/Leaflet.NavBar.js',
                paths.bower + 'Leaflet.Coordinates/src/util/NumberFormatter.js',
                paths.bower + 'Leaflet.Coordinates/src/Control.Coordinates.js',
                paths.bower + 'jquery/dist/jquery.js',
                paths.bower + 'col-resizable/colResizable-1.6.js',
                paths.bower + 'autolink/autolink-min.js',
                paths.geonode + 'js/removeEmptyCells.js',
	     ])
        .pipe(concat('idai-leaflet-components.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.build + '/js'));
});

// concatenates and minifies all Metadata dependecies into a single file 
gulp.task('concat-metadata-js', function(){
    gulp.src([ paths.geonode + 'js/idai_FE-format-layer-detail.js' ])
        .pipe(concat('idai_FE-format-layer-detail.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.build + '/js'));
    
    return gulp.src([
    			paths.bower + 'select2/dist/js/select2.full.js',
                paths.geonode + 'js/idai_BE-new-layer-meta.js'
	     ])
        .pipe(concat('idai_BE-metadata.min.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.build + '/js'));
});

// minifies and concatenates js files in build dir
gulp.task('minify-js', ['concat-js', 'html2js'], function() {
	return gulp.src([paths.build + '/js/' + pkg.name + '-no-tpls.js',
			paths.build + '/' + pkg.name + '-tpls.js'])
		.pipe(concat(pkg.name + '.js'))
    	.pipe(gulp.dest(paths.build + '/js'))
    	.pipe(uglify())
		.pipe(concat(pkg.name + '.min.js'))
    	.pipe(gulp.dest(paths.build + '/js'));
});

// converts, minifies and concatenates html partials
// in src to a single js file in build dir
gulp.task('html2js', function() {
	return gulp.src('src/**/*.html')
		.pipe(minifyHtml())
		.pipe(ngHtml2Js({ moduleName: 'idai.templates', stripPrefix: 'src/' }))
		.pipe(concat(pkg.name + '-tpls.js'))
		.pipe(gulp.dest(paths.build + '/js'));
});

gulp.task('copy-fonts', function() {
	return gulp.src(paths.bootstrap + '/fonts/**/*', { base: paths.bootstrap + '/fonts' })
  	.pipe(gulp.dest(paths.build + '/fonts'));
});


// Copy brand images and Leaflet-lib-images
gulp.task('copy-images',['minify-leaflet-css'],function() {
    gulp.src([
    	paths.bower + '/leaflet/dist/images/**',
    	paths.bower + '/leaflet-fullscreen/dist/**',
    	paths.bower + '/leaflet-measure/dist/images/**',
    	paths.bower + '/Leaflet.NavBar/src/img/**',
    	'img/**'
    	])
        .pipe(gulp.dest(paths.build+'/img'));
    });


gulp.task('build', [
	'sass',
	'minify-css',
	'concat-js',
	'concat-deps',
	'html2js',
	'minify-js',
	'copy-fonts',
	'concat-leaflet-js',
	'minify-leaflet-css',
	'copy-images',
	'concat-metadata-js',
]);

// clean
gulp.task('clean', function() {
	return del(paths.build + '/**/*');
});

// runs the development server and sets up browser reloading
gulp.task('server', ['sass', 'concat-js', 'html2js', 'copy-fonts'], function() {
	browserSync({
		server: {
			baseDir: '.',
        	middleware: [
        		// rewrite for AngularJS HTML5 mode, redirect all non-file urls to index.html
				modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.jpg|\\.gif|\\.json|\\.woff2|\\.woff|\\.ttf$ /index.html [L]']),
        	]
		},
		port: 8084
	});

	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.js', ['concat-js']);
	gulp.watch('src/**/*.html', ['html2js']);

	gulp.watch(['index.html',
		'demo/**/*.html',
		'partials/**/*.html',
		'src/**/*.html',
		'js/*.js'], reload);
});

gulp.task('default', function() {
	runSequence('clean', 'test', 'build');
});