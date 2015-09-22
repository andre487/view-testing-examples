/**
 * @file
 * Application code's tests in BD style
 */
describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function() {
        var scope, ctrl;

        beforeEach(module('phonecatApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('PhoneListCtrl', { $scope: scope });
        }));

        it('should create "phones" model with 3 phones', function() {
            assert.lengthOf(scope.phones, 3);
        });

        it('should set the default value of orderProp model', function() {
            assert.equal(scope.orderProp, 'age');
        });
    });
});
