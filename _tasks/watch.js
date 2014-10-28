'use strict';
var p = require('path');

module.exports = function watch(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Options
    return {
        options: {
            tasks: ['copyto', 'imagemin', 'less', 'autoprefixer', 'concat' , "uglify", "i18nTemplates"]
        }
    };
};
