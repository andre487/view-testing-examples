/**
 * Router that connects URL and model (and state through model)
 * @type {Backbone.Router}
 */
var Router = Backbone.Router.extend({
    routes: {
        '': 'start',
        '!/': 'start',
        '!/success': 'success',
        '!/error': 'error'
    },

    start: function() {
        appState.set({ state: 'start' });
    },

    success: function() {
        appState.set({ state: 'success' });
    },

    error: function() {
        appState.set({ state: 'error' });
    }
});
