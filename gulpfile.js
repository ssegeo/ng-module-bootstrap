var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require("gulp-uglify");

var paths = {
    mainjs: ['./src/**/*.module.js', './src/**/*.js'],
    bundlejs: [
        './src/vendors/angular/angular.js',
        // put additional external libs here
        './src/vendors/*.module.js'
    ]
};

function onError(e) {
    var err = {
        plugin: e.plugin,
        message: e.message
    };

    gutil.log('\n\t### ERROR ###\n' + '\tPlugin: ' + err.plugin + '\n\tMessage: ' + err.message);
    this.emit('end');
}

gulp.task('mainjs', function (done) {
    gulp.src(paths.mainjs)
        .pipe(concat('index.js'))
        .on('error', onError)
        .pipe(gulp.dest('./src/'))
    // .pipe(uglify())
    // .on('error', onError)
    // .pipe(gulp.dest('./src/'))
    .on('end', function () {
        done();
    });
});

gulp.task('bundlejs', function (done) {
    gulp.src(paths.bundlejs)
        .pipe(concat('frameworks.js'))
        .on('error', onError)
        .pipe(gulp.dest('./src/'))
    // .pipe(uglify({
    //     compress: false,
    //     mangle: false,
    // }))
    // .pipe(gulp.dest('./src/'))
    .on('end', function () {
        done();
    });

});

gulp.task('watch', function () {
    gulp.watch(paths.mainjs, ['mainjs']);

    gulp.watch(paths.bundlejs, ['bundlejs']);
});

gulp.task('default', ['watch']);