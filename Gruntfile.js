module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    dist: {
				files: {
					'dist/<%= pkg.name %>.js': [
						'dist/templates.js',
						'src/js/modules.js',
						'src/js/*.js',
						'src/js/**/*.js'
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
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
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
	                'js/*.js',
		            'js/**/*.js',
		            'src/css/*.css',
		            'index.html'
	            ],
	            tasks: ['concat','cssmin']
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

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', [
		'html2js',
		'concat',
		'cssmin',
		'connect:server',
		'watch'
    ]);

    grunt.registerTask('build', ['html2js','concat','cssmin']);

    grunt.registerTask('test', ['karma:unit','karma:continuous']);

    grunt.registerTask('default', ['test', 'build']);

};
