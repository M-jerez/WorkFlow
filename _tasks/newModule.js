'use strict';

var path = require('path');
var conf = require("../ModuleWorkFlow").buildConfig;
var fs = require('fs');


module.exports = function newModule(grunt) {
	
	
	var build = grunt.config.get("build");
	var modulesDir = conf.modules;
	var newModuleDir = conf.newModuleTemplate;
	var replaceName = /{moduleName}/g;
	var replaceDate = /{date}/g;
	var replaceAuthor = /{author}/g;
	var replaceYear = /{year}/g;
	var Author = grunt.file.readJSON('package.json').author || "Jerezdev";



	// Load task
	grunt.registerTask('newModule', 'Create a new Module', function (moduleName) {
		if(!moduleName){
			console.log("<"+ "moduleName".blue +"> argument missing. Usage: grunt newModule:" + "moduleName".blue);
			console.log("Grunt task newModule, creates a new application Module in '"+modulesDir+"moduleName".blue +"'");
			return;
		}
		var newPath = path.join(modulesDir, moduleName);
		if(fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()){
			console.log("A module <"+moduleName+"> already exists in the path '"+newPath+"'");
			return;
		}

		recursiveCopy(newModuleDir,newPath,moduleName);

		console.log("New module <"+moduleName+"> created at '"+newPath+"'");
	});


	/**
	 * Recursive copies the src folder into dest. for each file it searchs and replace the patterns
	 * {moduleName}, {year} , {date} and {author} for values generated dinamically.
	 *
	 * @param src the folder to copy
	 * @param dest the folder to create
	 * @param newName the new name for {moduleName}
	 */
	function recursiveCopy(src, dest, newName ) {
		var exists = fs.existsSync(src);
		var stats = exists && fs.statSync(src);
		var isDirectory = exists && stats.isDirectory();
		if (exists && isDirectory) {
			fs.mkdirSync(dest);
			fs.readdirSync(src).forEach(function (childItemName) {
				var subSrc = path.join(src, childItemName);
				var subDest = path.join(dest, childItemName);
				recursiveCopy(subSrc,subDest,newName);
			});
		} else {
			var split = dest.split(path.sep);
			var filename =  split[split.length -1];
			var prefixedName = newName+filename;
			if(filename !== ".gitkeep"){
				var data = fs.readFileSync(src,"utf8");
				data = data.replace(replaceName, newName)
					.replace(replaceDate, new Date().toLocaleDateString())
					.replace(replaceYear, new Date().getFullYear())
					.replace(replaceAuthor, Author);
				split[split.length -1] = prefixedName;
				dest = split.join(path.sep);
				fs.writeFileSync(dest, data,"utf-8");
			}
		}
	}



};
