View testing examples
=====
There are some examples of view components testing

## Backbone.js
Founded in 2010. It has MVP architecture, some kind of MVC like pattern.

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

## AngularJS
Founded in 2009, first stable version in 2012. It has some kind of MVC architecture. 
[Some details](http://www.codeproject.com/Articles/869712/AngularJS)

TODO: continue
