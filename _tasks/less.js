'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;

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
                    dest:  path.join(conf.projectFronted,"css/less.css"),
                    src: path.join(conf.modules,"/*/",conf.moduleAssets,"**/index.less")
                }
            ]
        }
    };
};
