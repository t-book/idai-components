module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		    dist: {
				files: {
					'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': [
						'dist/templates.js',
						'src/js/modules.js',
						'src/js/**/services_*.js',
						'src/js/**/filters_*.js',
						'src/js/**/directives_*.js'
					]
				}
		    }
		},
		html2js: {
			options: {
				watch: true,
				module: 'idai.templates'
			},
		    main: {
		    	src: ['src/partials/directives/**/*.html'],
		    	dest: 'dist/templates.js'
		    },
		},
		karma: {
			unit: {
    			configFile: 'test/karma.conf.js',
			},
			//continuous integration mode: run tests once in PhantomJS browser.
			continuous: {
				configFile: 'test/karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},
		watch: {
	        livereload: {
	            options: {
	                livereload: '<%= connect.server.options.livereload %>'
	            },
	            files: [
	                'src/partials/directives/**/*.html',
		            'js/**/*.js',
		            'index.html'
	            ],
	            tasks: ['uglify']
	        }
	    },
		connect: {
			server: {
				options: {
					port: 1235,
					livereload: 35730
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', [
		'html2js',
		'uglify',
		'connect:server',
		'watch'
    ]);

    grunt.registerTask('build', ['html2js','uglify']);

    grunt.registerTask('test', ['karma:unit','karma:continuous']);

    grunt.registerTask('default', ['test', 'build']);

};
