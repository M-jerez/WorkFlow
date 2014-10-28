/**
 * Build Config: contains all path names required to build "compile" the project.
 * The build proccess, copy the
 */
var buildConfig = {
    /**
     * Backend directory.
     * Modules are copied here during the build task.
     */
    backendDir : "app/"

    /**
     * FrontEnd directory. Usually the http root directory.
     * Module assets are compiled in this directory.
     */
    ,frontendDir : "public/"

    /**
     * Modules directory.
     * Each Module is a sub-folder of this directory, files and folders within
     * each module are copied to the "backendDir" during the build task.
     */
    ,modulesDir : "modules/"

    /**
     * Directory used as template to create new Modules.
     * Wen the "grunt newModule:Modulename" task is run, a copy of this directory  is created in
     * the modules directory, and all the files are prefixed with the
     * new moduleName.
     */
    ,newModuleDir : "_newModule/"

    /**
     * Assets sub-folder of each module.
     * Files within this folder are not copied to the _assets directory, instead
     * they are processed by grunt tasks.
     * This route is relative to each module directory.
     */
    ,assetsFolder : "./_frontend/"

};


module.exports = buildConfig;