'use strict';
var p = require('path');
var fs = require('fs');

module.exports = function copyto(grunt) {
    // Load task and build config
    grunt.loadNpmTasks('grunt-copy-to');
    var modulesDir = "./modules";


    // Options for copy app
    var taskConfig = {};


    //Sets the options for each module dynamically
    getModuleList().forEach(function(moduleName) {
        taskConfig["build_" + moduleName] = {
            files: [
                {
                    cwd: p.join("./modules", moduleName, "/html"),
                    src: ['**/*'],
                    dest: p.join("./_assets/_html/",moduleName,"/")
                }
            ]
        }
    });


    return taskConfig;

    /**
     * Returns an array with all the modules within the modules directory.
     * module Name = ( modules > subFolder );
     * @returns {Array}
     */
    function getModuleList() {
        var list = [];
        var exists = fs.existsSync(modulesDir);
        var stats = exists && fs.statSync(modulesDir);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            fs.readdirSync(modulesDir).forEach(function(fileName) {
                var modDir = p.join(modulesDir, fileName);
                if (fs.statSync(modDir).isDirectory())
                    list.push(fileName);
            });
        }
        return list;
    }
};
