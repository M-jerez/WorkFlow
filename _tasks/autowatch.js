'use strict';

module.exports = function autowatch(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-autowatch');

    // Options
    return {
        options: {
            tasks: ['copyto', 'imagemin', 'less', 'autoprefixer', 'concat' , "uglify"],
            run:true
        }
    };
};
