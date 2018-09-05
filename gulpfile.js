var gulp  = require('gulp'),
    gutil = require('gulp-util');
var exec = require('child_process').exec;

folder = {
    src: 'server/',
}

gulp.task('default', ['build']);

gulp.task('build',['serve'], function (cb) {
  exec('ng build ', function (err, stdout, stderr) {
   
    cb(err);
    return gutil.log(stdout);
  });
});

gulp.task('serve', function (cb) {
    exec('ng serve', function (err, stdout, stderr) {
     
      cb(err);
      return gutil.log(stdout);
    });
  });
  gulp.task('buildserver', function (cb) {
      var source = folder.src + 'server.js';
      console.log(source)
    exec('nodemon '+source, function (err, stdout, stderr) {
     
      cb(err);
      return gutil.log(stdout);
    });
  });