View testing examples
=====
There are some examples of view components testing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Backbone.js](#backbonejs)
  - [Application](#application)
  - [Architecture explanation](#architecture-explanation)
  - [What we test in View?](#what-we-test-in-view)
  - [Testing tools](#testing-tools)
- [AngularJS](#angularjs)
  - [Application](#application-1)
  - [What we test in View?](#what-we-test-in-view-1)
  - [Testing tools](#testing-tools-1)
- [React](#react)
  - [Application](#application-2)
  - [What we test in View?](#what-we-test-in-view-2)
  - [Testing tools](#testing-tools-2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Backbone.js
First stable version released in 2010. 
It has MVP architecture, some kind of MVC like pattern.

### Application
Application in this repo is inspired by [this post](http://habrahabr.ru/post/127049/).

Architecture:

![Application architecture](https://rawgit.com/Andre-487/view-testing-examples/master/.uml/backbone-architecture.svg)
 
### Architecture explanation
[Article](http://stackoverflow.com/a/6660560/1377912)
 
Essentials:

| MVC | Backbone.js | What it does |
| --- | --- | --- |
| Controller | View (mostly) | Handles user interaction |
| View | template rendered by a view | Displays the data |
| Model | Model & Collection | Represents the data, handles data access |

### What we test in View?
  * Initialization
  * Rendering
  * Event handling
  * Interaction with the model

### Testing tools
We can test the application in the browser environment or in any environment that emulate a browser.

For unit tests we use:
  * [Mocha](http://mochajs.org/) for test cases,
  * [Chai](http://chaijs.com/) for assertions.


## AngularJS
First stable version released in 2012. It has some kind of MVC architecture. 
[Architecture explanation](http://www.tutorialspoint.com/angularjs/angularjs_mvc_architecture.htm)

### Application
Application is inspired by [AngularJS tutorial](https://docs.angularjs.org/tutorial).

Architecture:

![Application architecture](https://rawgit.com/Andre-487/view-testing-examples/master/.uml/angular-architecture.svg)

### What we test in View?
In unit tests we testing Controller. We check its interaction with the `$scope`. 

Wide logic check implemented in end to end tests with Protractor.

### Testing tools
We can test the application in the browser environment or in any environment that emulate a browser.

For unit tests we use:
  * [Mocha](http://mochajs.org/) for test cases,
  * [Chai](http://chaijs.com/) for assertions,
  * [ngMock](https://docs.angularjs.org/api/ngMock) for separate Controller testing.
  
For end to end tests we use [Protractor](http://www.protractortest.org/).

## React
First stable version released in 2013.
React is just the UI or V in MVC.

### Application
Application in this repo is inspired by [React tutorial](http://facebook.github.io/react/docs/tutorial.html).

It requires a building. For this purpose we use [WebPack](https://webpack.github.io/) and [Babel](https://babeljs.io/).

Architecture:

![Application architecture](https://rawgit.com/Andre-487/view-testing-examples/master/.uml/react-architecture.svg)

### What we test in View?
Some basic rendering and reaction to events.   

### Testing tools
React is tricky thing and we need a complex stack for its testing: 
  * [Mocha](http://mochajs.org/) for test cases,
  * [Babel](https://babeljs.io/) for JSX compilation,
  * [jsdom](https://github.com/tmpvar/jsdom) for DOM emulation in Node.js environment,
  * [React.addons.TestUtils](http://facebook.github.io/react/docs/test-utils.html) for rendering Virtual DOM and operations with it,
  * [Chai](http://chaijs.com/) for assertions.
