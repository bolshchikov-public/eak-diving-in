# Notes on getting started with Ember App Kit

## In short what the **** is Ember App Kit
It's a skeleton for you ambition Ember App with
integrated modules system, testing and building phases.

## What does it give to me?

* Ember *AMD* support instead of global name spacing
* Integrated *JSHint*
* Integrated *qUnit* support
* *Karma* test runner
* Integrated *Grunt* file
	* CSS compilation
	* Ember templates compilation
	* Minification

All in all it might save you several days of setting up the
project environment.

## Hitting the road

1. The most painless way to start, since there's no
clear explanation how, is to create your own project,
download EAK as zip and paste into the project.
However, make sure you copy the whole folder and not its
content since OSX doesn't copy hidden files (files that
start with . in the name).

2. After copying, run `sudo npm install` and `bower install`
to install all dependencies. Then run `grunt server`
to compile the example application that EAK comes with.
Open the browser and navigate to `http://localhost:8000`
and see the result.

3. EAK looks complex. But most if it is configurations which might
not concern you from the very beginning. You area is the `app` folder.
Its content is intuitively clear and the names are self-explanatory.
But anyway, what does it have?

	* `adapters` is where you put your adapters for Ember Data.
	* `components` is where you write the JS of your components
	* `controllers` is for ... controllers
	* `helpers` is for registering handlebars helpers
	* `models` is for setting the models per route
	* `styles` is for less/sass and similar to be compiled in app.css
	* `templates` is for handlebars
	* `templates/components` is for handlebars of components
	* `views` is for JS to customize your views
	* `index.html` as usual
	* `app.js` is an entry point
	* `router.js` to declare the map of routes
For more, read [here](http://iamstef.net/ember-app-kit/guides/getting-started.html)
4. Little note about ES6 modules
It's a distinct feature of EAK. Each file is a separate module where
its dependencies are declared at the top and exports at the bottom of
the file.
To declare the import dependency use the following syntax

		import MyModel from "appkit/models/foo-model";

That means import the `default` export from the file `foo-model` as a `MyModel`.
Pay attention to the `appkit` from the dependency declaration. This is a module
prefix that is configured from `app.js`.

		var App = Ember.Application.extend({
			modulePrefix: 'appkit', // TODO: loaded via config
		});

Export declarations declare that a top-level declaration in a module is visible externally to the module.
[ES6 Transpiler](https://github.com/square/es6-module-transpiler#supported-es6-module-syntax) allows several
exports BUT the EAK currently supports only the
[default](https://github.com/square/es6-module-transpiler#default-exports) one using the following syntax

		export default Ember.Route.extend({
			model: function() {
				return ['red', 'yellow', 'blue'];
			}
		});

5. Ember App Kit has qUnit and Karma integration including coverage. How cool is that, ah?
EAK allows to write two types of tests: unit and acceptance tests. Unit tests can be used to confirm
that each part of the application **can** work as designed. Acceptance tests confirm that each of them
**do** behave as expected (i.e. they are working together as designed).