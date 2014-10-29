'use strict';
var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;


module.exports = function imagemin(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    var build = grunt.config.get("build");

    // Options
    return{
        build_public: {
            options: {// Target options
                optimizationLevel: 3,
                progressive: false
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: conf.modules,
                    src: ["**/*.{png,jpg,jpeg,gif,PNG,JPG,JPEG,GIF}"],
                    dest: path.join(conf.projectFronted,"img/")
                }
            ]
        }
    };
};
