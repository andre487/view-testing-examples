/**
 * Users list (something like DB)
 * @type {Array}
 */
var users = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggy'];

/**
 * Main model that contains state
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
