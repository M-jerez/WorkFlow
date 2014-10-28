'use strict';
var path = require('path');
var conf = require("../ModuleFlow");


module.exports = function autoprefixer(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Options
    return{
        options: {
            browsers: ['> 1%', 'last 2 versions', "ie 8", 'ie 9']
        },
        build: {
            dest: path.join(conf.frontendDir,"_css/app.css"),
            src: path.join(conf.frontendDir,"_css/less.css")
        }
    };
};
