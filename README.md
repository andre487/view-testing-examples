View testing examples
=====
There are some examples of view components testing

## Backbone.js
First stable version released in 2010. 
It has MVP architecture, some kind of MVC like pattern.

### Application
Backbone application in this repo is inspired by [this post](http://habrahabr.ru/post/127049/).

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
