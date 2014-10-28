'use strict';
var p =  require('path');

module.exports = function uglify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');
	var build = grunt.config.get("build");

	// Options
	return {
		options: {
			sourceMap: true,
			sourceMapIncludeSources: false
		},
		components_js: {
			dest: p.join(build.buildDir, build.frontEndFolder , '_js/dependencies.min.js'),
			src: p.join(build.buildDir, build.frontEndFolder , "_js/dependencies.js")
		},
		app_js: {
			dest: p.join(build.buildDir, build.frontEndFolder , '_js/app.min.js'),
			src: p.join(build.buildDir, build.frontEndFolder , '_js/app.js')
		}
	};
};
