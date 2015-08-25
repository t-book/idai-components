module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    dist: {
				src: [
					'dist/templates.js',
					'src/js/modules.js',
					'src/js/**/*.js'
				],
				dest: 'dist/<%= pkg.name %>.js'				
		    }
		},
		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': [
						'dist/<%= pkg.name %>.js'
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
		            'src/js/**/*.js',
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
					livereload: 35730,
					middleware: function (connect, options) {
						var modRewrite = require('connect-modrewrite');
						return [
							// rewrite for AngularJS HTML5 mode
							modRewrite(['^[^\\.]*$ /index.html [L]']),
							// Serve static files.
							connect.static(options.base[0])
						];
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
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

    grunt.registerTask('test', ['karma:unit']);

	grunt.registerTask('build', ['test','html2js','concat','uglify','cssmin']);

    grunt.registerTask('default', ['build']);

};
