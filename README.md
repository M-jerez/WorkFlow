#Workflow for web projects

Workflow for web projects based on grunt tasks and modularization .

ModuleWorkFlow is a very basic starting template for web projects.
It is framework agnostic and needs and may be customized to work with each language or technology.
It is tested mainly with PHP backend but it is enough flexible to work with other languages.

Folder structure and grunt tasks are specifically designed to help
in the modularization of web application (front-end side only).




##WorkFlow
The Workflow is based on [Grunt tasks](http://gruntjs.com/) that compiles your source assets.
Typicall tasks are: combine and minify javascript, compile less, sass, stylus or any other css preprocessor,
minify images, extract translation string from your source files to generate localization files.

Tasks reside in the `_tasks` directory and each task must be in its own file, this has proven to be a 
very flexible way to organize grunt tasks.

It is very recomended to study and become bery familiarizated with the grunt tasks
to get the max performance and flexibility to the work-flow.





##Modules

Write your application by Modules may improve code logic and re-usability. 

Modules reside in the `modules` directory, they may be backEnd only, frontEnd only or contain code 
of both sides frontEnd and frontend, ideally each module should contain it's own html, css and javascript 
and should be totally functional.


Currently there is not a "Module Manager" to import or export modules from one project to other, 
however write your application by modules make this task easier and make it possible to implement 
"Module Manager" in a future releases. 


To create a new module run `grunt  newModule:module_Name` and a new module will be created
with cloning the structure of the `_newModule` directory, this is the template for new modules
so any change here will be reflected when creating a new module. the name of the new module will
be prepended to every file when creating a new module this way if there is a file `View.js` will
be created as `fooView.js` for a module called `foo`.



###Module Structure:

* **backend**: files and folders within this module subdirectory are copied to the `projectBackend` when the build task is executed.
* **frontend**: files and folders within this module subdirectory are copied to the `projectFrontend` when the build task is executed.
* **assets**: files and folders within this module subdirectory are pre-compiled by grunt tasks, see each task to se the sources and result file.

> !IMPORTANT! If two files of different modules have the same name they are going to ve overridden when copied.



##Assets - Javascrip.

**All js files within the module `assets` directory are concatenated to a single file
`projectFrontend/js/app.js`.** The order of concatenation is aleatory.


**Js libraries or dependencies are concatenated to `projectFrontend/js/dependencies.js`**.
Any JavaScript dependency or library required by the module must be included in the
`ModuleWorkFlow.js` config file, in the `JsDependencies` array.
Javascript dependencies must be set manually to guarantee the order in which dependencies are included "concatenated".


##Assets - CSS.

**Autoprefixer is enabled [see grut-autoprefixer.](https://github.com/nDmitry/grunt-autoprefixer)** 
so browser specific prefixes are automatically generated.

**Less files within the module `assets` directory are automatically compiled and
generate the file `projectFrontend/css/less.css`.**  The entry point is any file called `*/index.less`
any other less files should be imported using the standard less @import clause.


##Assets - Images.

Any image within the module `assets` directory is automatically minimized to the `projectFrontend/img/` directory.




##Running The Grunt Tasks.

* To run the main task that run all other tasks in the correct order use `grunt  build`.
* To automatically watch file changes and run the tasks use `grunt  RUN`.
* To create a new module run `grunt  newModule:module_Name`.
