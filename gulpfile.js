var gulp = require('gulp');
var child = require('child_process');
var server = null;

//Runs the file watching and then calls init
gulp.task('default', ['watch', 'init']);

//Runs the initial build and run
gulp.task('init', ['build', 'run']);

//Sets up file watching
gulp.task('watch', function() {
  gulp.watch('./**/*.go', ['build','run']);
  gulp.watch('./**/*.html', ['build','run']);
});

//Call go install which will compile the go code
//and install it in the GOBIN directory
gulp.task('build', function() {
  return child.spawnSync('go', ['install']);
});

//Stop the running process and run a new one
gulp.task('run', function() {
  if (server)
    server.kill();
  server = child.spawn('godev');
  server.stderr.on('data', function(data) {
    process.stdout.write(data.toString());
  });
  server.stdout.on('data', function(data) {
    process.stdout.write(data.toString());
  });
});