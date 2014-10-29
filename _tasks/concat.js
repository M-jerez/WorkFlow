'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;
var dependencies = require("../ModuleWorkFlow").JsDependencies;

module.exports = function concat(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-concat');
    var build = grunt.config.get("build");

    // Options
    return {
        options: {
            separator: ';'
        },
        dependencies: {
            //Dependencies list must be set manually in the config ModuleWorkFlow.js file
            src: dependencies,
            dest: path.join(conf.projectFronted,"js/dependencies.js")
        },
        app: {
            src: path.join(conf.modules,"*/",conf.moduleAssets,"**/*.js"),
            dest:path.join(conf.projectFronted,"js/app.js")
        }
    };
};
