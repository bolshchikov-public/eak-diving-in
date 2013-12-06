# Notes of starting and use EAK

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

3. EAK is complex. It's complex in order to reduce your
struggle to assemble the serious application. What does it
include?