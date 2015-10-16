module.exports = function (gulp) {
	require('./gulp-hint')(gulp);
	var browserify = require('browserify');
	var tsify = require('tsify');
	var source = require('vinyl-source-stream');
	var buffer = require('vinyl-buffer');
	var uglify = require('gulp-uglify');
	var sourcemaps = require('gulp-sourcemaps');
	var gutil = require('gulp-util');
	var ngAnnotate = require('gulp-ng-annotate');
	var assign = require('lodash.assign');
	var watchify = require('watchify');
	
	var customOpts = {
  		entries: ['src/ts/main.ts'],
  		debug: true //add dependency on production env?
	};

	var unwatched = browserify(customOpts).plugin('tsify'); //doesn't watch for changes - can be used in production
	
	var watched = watchify(browserify(customOpts).plugin('tsify'));
	watched.on('update', function () {
		return bundle (watched);
	}); // on any dep update, runs the bundler
	watched.on('log', gutil.log); // output build logs to terminal
	
	/**
	 * This should be used in development to constantly 'browserify' and compile TS code.
	 */
	gulp.task(':watchify', [':tslint', ':clean-js'], function () {
		return bundle (watched);
	});

	/**
	 * This builds with 'browserify' and compiles TS code only once.
	 */
	gulp.task(':browserify', [':tslint', ':clean-js'], function () {
		return bundle (unwatched);
	});
	
	function bundle (target) {
		return target.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		    .pipe(source('bundled.js'))
		    .pipe(ngAnnotate())
		    .pipe(buffer())
		    .pipe(sourcemaps.init({loadMaps: true}))
		        .pipe(uglify())
		        .on('error', gutil.log)
		    .pipe(sourcemaps.write('./'))
		    .pipe(gulp.dest('./src/prod/js/'));
	}
};