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
                    '../../prod/khajuraho-things-to-do/assets/css/bundles-style.min.css': [
                        'assets/css/font-awesome.min.css',
                        'assets/css/animate.css',
                        'assets/css/base.css',
                        'assets/css/theme.css',
                        'assets/css/responsive.css'
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
                    'assets/js/jquery.easing.min.js',
                    'assets/js/wow.min.js'
                ],
                dest: 'assets/js/bundles-script.js',
            },
        },
        // Uglify
        uglify: {
            my_target: {
                files: {
                    '../../prod/khajuraho-things-to-do/assets/js/bundles-script.min.js': ['assets/js/bundles-script.js']
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
                    dest: '../../prod/khajuraho-things-to-do/assets/images/'
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