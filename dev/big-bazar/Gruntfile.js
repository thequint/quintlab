module.exports = function(grunt) {

  grunt.initConfig({
	  
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            '../../prod/big-bazaar-sabse-sasta-sale/assets/css/style.min.css': [
				'assets/css/font-awesome.min.css',
				'assets/css/animate.css',
				'assets/css/base.css',
				'assets/css/theme.css',
				'assets/css/responsive.css'
			]
          }
        }
      },
	  
	  concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: [
			    'assets/js/jquery.min.js',
			    'assets/js/jquery.easing.min.js',
			    'assets/js/wow.min.js',
			    'assets/js/functions.js'
		  ],
		  dest: 'assets/js/site.js',
		},
	  },
	  
  uglify: {
    my_target: {
      files: {
        '../../prod/big-bazaar-sabse-sasta-sale/assets/js/site.min.js': ['assets/js/site.js']
      }
    }
  }
//	  imagemin: {
//        dynamic: {
//			files: [{
//                expand: true,
//                cwd: 'assets/images-raw',
//                src: ['**/*.{png,jpg,gif}'],
//                dest: 'assets/images'
//            }]
//        }
//    }
	  
  });

  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
 
 	

  //grunt.registerTask('default', ['jshint']);

};