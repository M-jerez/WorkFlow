'use strict';
var p = require('path');

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
                    cwd: "./modules/",
                    src: ["**/*.{png,jpg,jpeg,gif,PNG,JPG,JPEG,GIF}"],
                    dest: "./_assets/_img/"
                }
            ]
        }
    };
};
