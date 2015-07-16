module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
	        livereload: {
	            options: {
	                livereload: '<%= connect.server.options.livereload %>'
	            },
	            files: [
	                'dest/idai-components-*.min.js',
		            'js/app.js',
		            'index.html'
	            ]
	        }
	    },
		connect: {
			server: {
				options: {
					port: 1234,
					livereload: 35729
				}
			}
		},
		html2js: {
		    options: {
		      // custom options, see below
		    },
		    main: {
		      src: ['src/partials/directives/**/*.html'],
		      dest: 'dest/templates.js'
		    },
		  },
		uglify: {
		    my_target: {
		      files: {
		        'dest/idai-components-0.1.0.min.js': [
					'dest/templates.seded.js',
					'src/js/modules.js',
					'src/js/**/services_*.js',
					'src/js/**/filters_*.js',
					'src/js/**/directives_*.js']
		      }
		    }
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');

	grunt.registerTask('server', [
		'connect:server',
		'watch'
    ]);

};
