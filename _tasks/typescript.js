'use strict';
var p =  require('path');

module.exports = function typescript(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-typescript');
	var build = grunt.config.get("build");

	// Options
	return {
        base: {
            src: [p.join(build.modulesDir,"**/*.ts")],
            options: {
                module: 'commonjs', //or commonjs
                target: 'es5', //or es3
                basePath: 'path/to/typescript/files',
                sourceMap: true,
                declaration: true
            }
        }
    };
};
