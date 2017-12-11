module.exports = function(grunt) {
    grunt.initConfig({
        // CSS
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../../prod/talking-stalking/assets/css/bundles-style.min.css': [
                        'assets/css/base.css',
                        'assets/css/jInvertScroll.css',
                        'assets/css/slick.css',
                        'assets/css/slick-theme.css',
                        'assets/css/font-awesome.min.css',
                        'assets/css/style.css'
                    ]
                }
            }
        },
        // Concat
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'assets/js/jquery.min.js',
                    'assets/js/jquery.jInvertScroll.js',
                    'assets/js/slick.min.js',
                    'assets/api/spreadsheet.js',
                    'assets/api/google-sheet.js',
                    'assets/js/twitter.js',
                    'assets/js/functions.js'
                ],
                dest: 'assets/js/bundles-script.js',
            },
        },
        // Uglify
        uglify: {
            my_target: {
                files: {
                    '../../prod/talking-stalking/assets/js/bundles-script.min.js': ['assets/js/bundles-script.js']
                }
            }
        },

        // Images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../../prod/talking-stalking/assets/images/'
                }]
            }
        }
    });

    //
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};