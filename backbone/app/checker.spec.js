/**
 * @file
 * Application code's tests in BD style
 *
 * We test the following things:
 *  - initialization,
 *  - rendering,
 *  - event handling,
 *  - interaction with the model
 */
describe('checker.view', function() {

    describe('initialization', function() {
        it('should throw exception without model', function() {
            assert.throws(function() {
                new CheckerView();
            }, 'Model is required');
        });

        it('should throw exception without element', function() {
            assert.throws(function() {
                new CheckerView();
            }, 'Element is required');
        });
    });

    describe('rendering and model interaction', function() {
        var FakeModel = Backbone.Model.extend({
            defaults: { username: 'Fake user', state: 'fake state' }
        });

        var container, model;

        beforeEach(function() {
            container = $('<div />');
            model = new FakeModel();
        });

        it('should render start view', function() {
            new CheckerView({ el: container, model: model });

            model.set({ state: 'start' });

            assert.equal(container.find('.start').length, 1);
        });

        it('should render success view', function() {
            new CheckerView({ el: container, model: model });

            model.set({ state: 'success' });

            assert.equal(container.find('.success').length, 1);
        });

        it('should render error view', function() {
            new CheckerView({ el: container, model: model });

            model.set({ state: 'error' });

            assert.equal(container.find('.error').length, 1);
        });
    });

    describe('event handling and model interaction', function() {
        var FakeModel = Backbone.Model.extend({
            defaults: { username: 'Fake user', state: 'start' },

            isNameValid: function() {
                return this.isValid;
            }
        });

        var container, model;

        beforeEach(function() {
            container = $('<div />');
            model = new FakeModel();
        });

        it('should change model to success when name is valid', function() {
            new CheckerView({ el: container, model: model });
            model.trigger('init'); // Render start view

            model.isValid = true; // Name is in DB
            container.find('form').trigger('submit'); // Make fake form submit

            assert.equal(model.get('state'), 'success');
        });

        it('should change model to error when name is invalid', function() {
            new CheckerView({ el: container, model: model });
            model.trigger('init'); // Render start view

            model.isValid = false; // Name is not in DB
            container.find('form').trigger('submit'); // Make fake form submit

            assert.equal(model.get('state'), 'error');
        });
    });

});
