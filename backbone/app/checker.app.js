/**
 * @file
 * Связь компонентов
 */

//
// Инициализация модели
//
var appState = new AppState();

//
// Инициализация роутера и связь с моделью
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
// Инициализация представления
//
new CheckerView({
    el: $('#container'),
    model: appState
});
appState.trigger('init');
