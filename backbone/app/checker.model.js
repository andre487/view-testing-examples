/**
 * Список пользователей (типа БД)
 * @type {Array}
 */
var users = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggy'];

/**
 * Модель приложения, описывающая состояние
 * @type {Backbone.Model}
 */
var AppState = Backbone.Model.extend({
    defaults: {
        username: 'Alan Smithee',
        state: 'start'
    },

    isNameValid: function(name) {
        return _.contains(users, name);
    }
});
