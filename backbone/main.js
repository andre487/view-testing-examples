/**
 * @file
 * Main file in which all the components are connected
 */
//
// Init a model
//
var appState = new AppState();

//
// Init a router and connect it with the model
//
var router = new Router();
appState.bind('change:state', function() {
    var state = this.get('state');
    if (state == 'start') {
        router.navigate('!/', false);
    } else {
        router.navigate('!/' + state, false);
    }
});

Backbone.history.start();

//
// Init view and connect it with the model and a DOM container
// On that point we inject all the dependencies into controller.
// DI makes its code much more testable
//
new CheckerView({
    el: $('#container'),
    model: appState
});
appState.trigger('init');
