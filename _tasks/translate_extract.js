'use strict';

var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;


module.exports = function translate_extract(grunt) {

    // Load task
    grunt.loadNpmTasks('grunt-translate-extract');
    var build = grunt.config.get("build");
    // Options
    return {
        build_frontend: {
            options: {
                locales: ["de", "en", "es", "fr"],
                outputDir: path.join(conf.modules,"_locales",conf.moduleFrontend ,"locales"),
                builtInParser: "gettextPHP_KV",
                errorOnDuplicatedKeys: false
            },
            files: {
                src: path.join(conf.modules, "*", conf.moduleBackend, "views/**/*")
            }
        },
        build_backendp: {
            options: {
                locales: ["de", "en", "es", "fr"],
                outputDir: path.join(conf.modules,"_locales",conf.moduleBackend ,"locales"),
                builtInParser: "gettextPHP_KV",
                errorOnDuplicatedKeys: false
            },
            files: {
                src: path.join(conf.modules,"*",conf.moduleBackend ,"views/**/*")
            }
        }
    };

};
