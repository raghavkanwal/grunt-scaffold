module.exports = function(grunt) {
	grunt.initConfig ({

		connect: {
			server: {
				options: {
					port:1234,
					base: "./public/"
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				spawn:false,
			},
			files: ['./public/assets/scss/*.scss','./public/*.html'],
			tasks: ['sass']
		},

		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'./public/assets/css/main.css':'./public/assets/scss/style.scss'
				}
			}
		},

	});

	//Load Watch task :
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Load Connect task :
	grunt.loadNpmTasks('grunt-contrib-connect');

	//Load SASS task :
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	//Run default tasks :
	grunt.registerTask('default', ['connect','watch','sass']);

}