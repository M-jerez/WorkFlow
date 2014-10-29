'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;

module.exports = function uglify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Options
	return {
		options: {
			sourceMap: true,
			sourceMapIncludeSources: false
		},
		components_js: {
			dest: path.join(conf.projectFronted, 'js/dependencies.min.js'),
			src: path.join(conf.projectFronted, "js/dependencies.js")
		},
		app_js: {
			dest: path.join(conf.projectFronted, 'js/app.min.js'),
			src: path.join(conf.projectFronted, 'js/app.js')
		}
	};
};
