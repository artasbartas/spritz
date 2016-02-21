/* jshint node: true */
'use strict';

module.exports = function (grunt) {
	// configure Grunt
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// files to lint with the JSHint task
		jshint: ['Gruntile.js']
		// concatenation defaults
		concat: {
      		js: {
        		files: {
          			'js/main.js': 'src/js/*.js' // compile the files in src folder to main.js
        		}
      		}
    	}
    	uglify: {
      		bundle: {
        		files: {
          			'js/main.min.js': 'js/main.js' // minify the main.js file into main.min.js
        		}
      		}
    	}

	});

	// load the module containing the JSHint task
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// concatenate files
	grunt.loadNpmTasks('grunt-contrib-concat');
	// minify the code
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register a default task to run JSHint
	// (allows 'grunt' rather than 'grunt jshint')
  	grunt.registerTask('default', ['jshint']); 
  	grunt.registerTask('js', 'Concatenate and minify js files', ['concat:js', 'uglify:bundle']);
};
