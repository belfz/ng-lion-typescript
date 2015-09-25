var gulp = require('gulp');

require('./gulp/gulp-test')(gulp);
require('./gulp/gulp-styles')(gulp);
require('./gulp/gulp-clean')(gulp);
require('./gulp/gulp-browserify')(gulp);

gulp.task('build', ['test', ':less']);
gulp.task('build.test-skip', [':browserify', ':less']);

gulp.task('watch', function () {
	gulp.watch('src/ts/**/*.ts', [':browserify']);	
});

//TODO: minify css