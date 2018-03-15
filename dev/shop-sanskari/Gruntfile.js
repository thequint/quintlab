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
                    '../../prod/shop-sanskari/assets/css/bundles-style.min.css': [
                        'assets/css/base.css',
                        'assets/css/animate.css',
                        'assets/css/font-awesome.min.css',
                        'assets/css/slick.css',
                        'assets/css/slick-theme.css',
                        'assets/css/themes.css'
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
                    'assets/js/jquery-1.10.2.min.js',
                    'assets/js/slick.min.js',
                    'assets/js/wow.min.js',
                    'assets/api/spreadsheet.js'
                ],
                dest: 'assets/js/bundles-script.js',
            },
        },
        // Uglify
        uglify: {
            my_target: {
                files: {
                    '../../prod/shop-sanskari/assets/js/bundles-script.min.js': ['assets/js/bundles-script.js']
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
                    dest: '../../prod/shop-sanskari/assets/images/'
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