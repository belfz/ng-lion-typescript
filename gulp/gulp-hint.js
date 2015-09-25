module.exports = function (gulp) {
	var tslint = require('gulp-tslint');
	gulp.task(':tslint', function() {
  		gulp.src(['src/ts/**/*.ts'])
    	.pipe(tslint())
		.pipe(tslint.report('verbose'));
	});
};