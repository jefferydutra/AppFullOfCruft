var gulp = require('gulp');

gulp.task('build', ['setDebug', 'jshint','browserify']);