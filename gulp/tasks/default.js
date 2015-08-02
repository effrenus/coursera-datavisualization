import gulp from 'gulp';
import runSequence from 'run-sequence';
import ghPages from 'gulp-gh-pages';

gulp.task('default', () => {
	runSequence(
		'jade',
		'webpack',
		'styles',
		'browserSync',
		'watch'
		);
});

gulp.task('deploy', () => {
	return gulp.src('./dist/**/*')
			.pipe(ghPages());
});
