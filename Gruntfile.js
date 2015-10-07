module.exports = function(grunt) {

	var paths = {
		bootstrap: 'bower_components/bootstrap-sass/assets/'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {				
				includePaths: [paths.bootstrap + 'stylesheets/', '.']
			},
			dist: {
				files: {
					'dist/css/<%= pkg.name %>.css': 'src/scss/theme.scss'
				}
			}
		},
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
		    dist: {
		    	src: ['src/partials/directives/**/*.html'],
		    	dest: 'dist/templates.js'
		    },
		},
		cssmin: {
			dist: {
				src: 'dist/css/<%= pkg.name %>.css',
				dest: 'dist/css/<%= pkg.name %>.min.css'
			}
		},
		copy: {
			dist: {
				expand: true,
				cwd: paths.bootstrap,
				src: 'fonts/bootstrap/**',
				dest: 'dist/'
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
					'src/scss/**/*.scss',
					'js/**/*.js',
					'partials/**/*.html',
					'index.html'
	            ],
	            tasks: ['html2js','concat','sass','cssmin']
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
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('server', [
		'html2js',
		'concat',
		'sass',
		'cssmin',
		'copy',
		'connect:server',
		'watch'
    ]);

    grunt.registerTask('test', ['karma:unit']);

	grunt.registerTask('build', ['test','html2js','concat','uglify','sass','cssmin', 'copy']);

    grunt.registerTask('default', ['build']);

};
