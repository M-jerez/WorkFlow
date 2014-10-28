'use strict';
var p = require('path');

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
            //the dependencies list must be set manually, this are all javascript libraries like Jquery, or any other,
            src: [
            ],
            dest: "./_assets/_js/dependencies.js"
        },
        app: {
            src: "./modules/*/js/**/*.js",
            dest: "./_assets/_js/app.js"
        }
    };
};
