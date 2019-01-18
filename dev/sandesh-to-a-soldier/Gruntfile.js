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
                    '../../prod/sandesh-to-a-soldier/assets/css/bundles-style.min.css': [
                        'assets/css/base.css',
                        'assets/css/swiper.css',
                        'assets/css/font-awesome.min.css',
                        'assets/css/jquery.pagepiling.css'
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
                    'assets/js/jquery.pagepiling.min.js',
                    'assets/js/swiper.min.js'
                ],
                dest: 'assets/js/bundles-script.js',
            },
        },
        // Uglify
        uglify: {
            my_target: {
                files: {
                    '../../prod/sandesh-to-a-soldier/assets/js/bundles-script.min.js': ['assets/js/bundles-script.js']
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
                    dest: '../../prod/sandesh-to-a-soldier/assets/images/'
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