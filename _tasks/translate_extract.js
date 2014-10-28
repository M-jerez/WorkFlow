'use strict';

var path = require('path');


module.exports = function translate_extract(grunt) {

    // Load task
    grunt.loadNpmTasks('grunt-translate-extract');
    var build = grunt.config.get("build");
    // Options
    return {
//        build_frontend: {
//            options: {
//                locales: ["de", "en", "es", "fr"],
//                templatesDest: path.join(build.publicDir, '_templates/frontend'),
//                localesDest: path.join(build.publicDir, '_locales/frontend')
//            },
//            files: [
//                {
//                    src: [
//                        path.join(build.modulesDir, "*", build.frontEndFolder, '**/*.html')
//                    ]
//                }
//            ]
//        },
        build_backendp: {
            options: {
                locales: ["de", "en", "es", "fr"],
                outputDir: './_assets/_locales/backend',
                builtInParser: "gettextPHP_KV",
                errorOnDuplicatedKeys: false
            },
            files: {
                src: './app/views/**/*.phtml'
            }
        }
    };

};
