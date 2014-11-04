var path = require('path');


/**
 * Project's root path.
 */
var root = __dirname;

/**
 * #############################################################################
 * BUILD CONFIGURATION
 * contains path names required to build or "compile" the project.
 * #############################################################################
 */
exports.buildConfig = {

    /**
     * Backend directory.
     * Modules are copied here during the build task.
     * No file should be edited here directly.
     * (Absolute Path)
     */
    projectBackend : path.join(root,"_app/")

    /**
     * FrontEnd directory. Usually the http root directory.
     * Module assets are compiled in this directory.
     * No file should be edited here directly.
     * (Absolute Path)
     */
    ,projectFronted : path.join(root,"_public/")


    /**
     * Directory used as template to create new Modules.
     * Wen the "grunt newModule:Modulename" task is run, a copy of this directory  is created in
     * the modules directory, and all the files are prefixed with the
     * new moduleName.
     * (Absolute Path)
     */
    ,newModuleTemplate : path.join(root,"_newModule/")

    /**
     * Modules directory.
     * Each Module is a sub-folder of this directory.
     * (Absolute Path)
     */
    ,modules : path.join(root,"modules/")


    /**
     * Frontend directory of each module.
     * Files within this directory are copied to the "projectFronted" directory.
     * (Relative to each Module)
     */
    ,moduleFrontend : "./frontend/"


    /**
     * Backend directory of each module.
     * Files within this directory are copied to the "projectBackend" directory.
     * (Relative to each Module)
     */
    ,moduleBackend : "./backend/"

    /**
     * Assets of each module.
     * Files within this directory are not copied to the "projectFronted" directory, instead
     * they are processed by grunt tasks. Typicall task are compile css, concatenate & minify js, etc.
     * This route is relative to each module directory.
     * (Relative to each Module)
     */
   , moduleAssets : "./assets/"

};


/**
 * #################################################################################################
 * JAVASCRIPT DEPENDENCIES LIST.
 * This list must be set manually to guarantee the order in which this dependencies are concatenated.
 * paths are relative to the project's root directory.
 * #################################################################################################
 */
exports.JsDependencies = [
// example paths (not real)
// "./bower/components/jquery/index.js"
// "./modules/index/frontend/required.js"

];


