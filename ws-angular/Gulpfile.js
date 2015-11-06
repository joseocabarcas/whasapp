// File: Gulpfile.js
'use strict';

var gulp      = require('gulp'),
connect   = require('gulp-connect'),
stylus    = require('gulp-stylus'),
nib       = require('nib'),
jshint    = require('gulp-jshint'),
stylish   = require('jshint-stylish'),
inject    = require('gulp-inject'),
wiredep   = require('wiredep').stream,
gulpif    = require('gulp-if'),
minifyCss = require('gulp-minify-css'),
useref    = require('gulp-useref'),
uglify    = require('gulp-uglify'),
uncss     = require('gulp-uncss'),
angularFilesort = require('gulp-angular-filesort'),
templateCache = require('gulp-angular-templatecache'),
historyApiFallback = require('connect-history-api-fallback');


// Servidor web de desarrollo
gulp.task('server', function() {
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});




// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
	gulp.src('./app/**/*.html')
	.pipe(connect.reload());
});


// Busca en las carpetas de estilos y javascript los archivos
// para inyectarlos en el index.html
gulp.task('inject', function() {
  return gulp.src('index.html', {cwd: './app'})
    .pipe(inject(
      gulp.src(['./app/scripts/**/*.js']).pipe(angularFilesort()), {
      read: false,
      ignorePath: '/app'
    }))
    .pipe(inject(
      gulp.src(['./app/stylesheets/**/*.css']), {
        read: false,
        ignorePath: '/app'
      }
    ))
    .pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/lib'
    }))
    .pipe(gulp.dest('./app'));
});



gulp.task('watch', function() {
	gulp.watch(['./app/stylesheets/**/*.css'], ['css', 'inject']);
	gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['wiredep']);
});


gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);