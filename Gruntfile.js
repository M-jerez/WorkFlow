'use strict';
var path = require('path');


module.exports = function (grunt) {

	// Load grunt tasks from the tasks directory
	require('grunt-config-dir')(grunt, {
		configDir: path.resolve('_tasks')
	});

	// Register group tasks
	grunt.registerTask('build', ['copyto', 'imagemin', 'less', 'autoprefixer', 'concat' , "uglify", "translate_extract"]);
    grunt.registerTask('RUN', ['build',"autowatch"]);

};
