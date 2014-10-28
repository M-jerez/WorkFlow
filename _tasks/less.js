'use strict';
var path = require('path');
var conf = require("../ModuleFlow");

module.exports = function less(grunt) {
    // Load task and build config
    grunt.loadNpmTasks('grunt-contrib-less');

    // Options
    return {
        build: {
            options: {
                compress: true
            },
            files: [
                {
                    dest:  path.join(conf.frontendDir,"_css/less.css"),
                    src: path.join(conf.modulesDir,"/*/css/index.less")
                }
            ]
        }
    };
};
