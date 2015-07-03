//Compile test.scss to test.css
//
//
//Usage:
// enter following command in a console under this folder:
//     > gulp
//
//Pre-requirement:
// Nodejs + Gulp + gulp-sass


gulp			= require('gulp');
sass			= require('gulp-sass');


gulp.task('default', function() {
	gulp.src("test.scss")
		.pipe(sass())
		.pipe(gulp.dest("./"));
});