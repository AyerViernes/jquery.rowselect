module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					"jquery.rowselect.min.js": "jquery.rowselect.js"
				}
			}
		},
		watch: {
			uglify: {
				files: ['./jquery.rowselect.js'],
				tasks: ['uglify:dist'],
				options: {
					nospawn: true
				}
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch']);
};
