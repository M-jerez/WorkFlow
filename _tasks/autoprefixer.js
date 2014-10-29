'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;


module.exports = function autoprefixer(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Options
    return{
        options: {
            browsers: ['> 1%', 'last 2 versions', "ie 8", 'ie 9']
        },
        build: {
            dest: path.join(conf.projectFronted,"css/app.css"),
            src: path.join(conf.projectFronted,"css/less.css")
        }
    };
};
