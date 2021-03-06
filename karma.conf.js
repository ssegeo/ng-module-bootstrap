// Karma configuration
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon-chai'],


        // list of files / patterns to load in the browser
        files: [
            // 'src/vendors/es5-shim/es5-shim.min.js',
            // 'src/vendors/es5-shim/es5-sham.min.js',
            // 'src/vendors/es6-shim/es6-shim.min.js',
            // 'src/vendors/es6-shim/es6-sham.min.js',
            'src/frameworks.js',
            'src/vendors/angular-mocks/angular-mocks.js',
            'src/index.js',
            'src/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: ['src/vendors/**/*.spec.js'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],
        // // reporter options 
        // mochaReporter: {
        //     output: 'autowatch'
        // },
        plugins: [
            'karma-*',
        ],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', /*'PhantomJS'*/ ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};