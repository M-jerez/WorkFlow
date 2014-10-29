'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;

module.exports = function typescript(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-typescript');

	// Options
	return {
        base: {
            src: [path.join(conf.modules,"/*/",conf.moduleAssets,"**/*.ts")],
            options: {
                module: 'commonjs', //node.js module system
                target: 'es5', //or es3
                basePath: 'path/to/typescript/files',
                sourceMap: true,
                declaration: true
            }
        }
    };
};
