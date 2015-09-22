/**
 * Application view
 * @type {Backbone.View}
 */
var CheckerView = Backbone.View.extend({
    model: null, // Model will be here

    el: $(), // DOM container will be here

    templates: {
        start: _.template(getTemplateString('start-template')),
        success: _.template(getTemplateString('success-template')),
        error: _.template(getTemplateString('error-template'))
    },

    events: {
        'submit form': 'check' // The check event handler
    },

    initialize: function () {
        // Required elements check
        var requiredErrors = _.compact([
            !this.model && 'Model is required',
            this.$el.length == 0 && 'Element is required'
        ]);

        if (requiredErrors.length) throw new Error(requiredErrors.join(', '));

        // Add model events listener
        this.model.bind('init change', this.render, this);
    },

    check: function (e) {
        e.preventDefault();

        var username = this.$el.find('input:text').val();
        this.model.set({
            state: this.model.isNameValid(username) ? 'success' : 'error',
            username: username
        });
    },

    render: function () {
        var state = this.model.get('state');
        var template = this.templates[state];
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this;
    }
});
