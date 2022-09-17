'use strict';

module.exports = function (gulp, options, plugins) {

    return function (cb) {
        gulp.src([options.path.src.scss + 'app.scss',
        ])
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(plugins.concat('app.css'))
            .pipe(gulp.dest(options.path.build.css))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
        cb();
    };
};


