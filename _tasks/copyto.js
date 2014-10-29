'use strict';
var p = require('path');
var fs = require('fs');
var conf = require("../ModuleWorkFlow").buildConfig;

/**
 * This task copies 'module/backend' to 'projectBackEnd'
 * and 'module/frontend' to 'projectFrontEnt'
 */
module.exports = function copyto(grunt) {
    // Load task and build config
    grunt.loadNpmTasks('grunt-copy-to');
    var modulesDir = conf.modules;
    var taskConfig = {};


    //Sets the options for each module dynamically
    getModuleList().forEach(function(moduleName) {
        taskConfig["module-" + moduleName] = {
            files: [
                {
                    // frontend directories
                    cwd: p.join(conf.modules, moduleName, conf.moduleBackend),
                    src: ['**/*'],
                    dest: conf.projectBackend
                },
                {
                    // backend directories
                    cwd: p.join(conf.modules, moduleName, conf.moduleFrontend),
                    src: ['**/*'],
                    dest: conf.projectFronted
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
