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
  		debug: true
	};
	var opts = assign({}, watchify.args, customOpts);
	var b = watchify(browserify(opts).plugin('tsify'));
	
	gulp.task(':browserify', [':tslint', ':clean-js'], bundle); // so you can run `gulp :browserify` to build the file
	b.on('update', bundle); // on any dep update, runs the bundler
	b.on('log', gutil.log); // output build logs to terminal
	
	function bundle () {
		return b.bundle()
		    .pipe(source('bundled.js'))
		    .pipe(ngAnnotate())
		    .pipe(buffer())
		    .pipe(sourcemaps.init({loadMaps: true}))
		        // Add transformation tasks to the pipeline here.
		        .pipe(uglify())
		        .on('error', gutil.log)
		    .pipe(sourcemaps.write('./'))
		    .pipe(gulp.dest('./src/prod/js/'));
	}
};