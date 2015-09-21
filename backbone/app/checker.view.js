/**
 * Представление приложения
 * @type {Backbone.View}
 */
var CheckerView = Backbone.View.extend({
    model: null, // Сюда мы запишем модель

    el: $(), // Сюда мы запишем элемент-контейнер

    templates: {
        start: _.template(getTemplateString('start-template')),
        success: _.template(getTemplateString('success-template')),
        error: _.template(getTemplateString('error-template'))
    },

    events: {
        'click input:button': 'check' // Обработчик клика на кнопке "Проверить"
    },

    initialize: function () {
        // Проверка элементов, необходимых для работы
        var requiredErrors = _.compact([
            !this.model && 'Model is required',
            this.$el.length == 0 && 'Element is required'
        ]);

        if (requiredErrors.length) throw new Error(requiredErrors.join(', '));

        // Подписка на события модели
        this.model.bind('init change', this.render, this);
    },

    check: function () {
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
