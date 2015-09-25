/**
 * @file
 * CommentBox component's tests in BD style
 */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var assert = require('chai').assert;
var sinon = require('sinon');

var CommentForm = require('../src/view_components/CommentBox/CommentForm/CommentForm.jsx');

describe('CommentForm', function() {
    var commentForm, callback;

    beforeEach(function() {
        callback = sinon.spy();

        commentForm = TestUtils.renderIntoDocument(
            <CommentForm onCommentSubmit={callback} />
        );
    });

    it('should work render inputs for name and comment', function() {
        var inputs = TestUtils.scryRenderedDOMComponentsWithClass(commentForm, 'formInput');

        assert.lengthOf(inputs, 2);

        assert.ok(
            inputs.some(function(elem) { return elem.props.className.indexOf('formInput:author') > -1 }),
            'No author input'
        );

        assert.ok(
            inputs.some(function(elem) { return elem.props.className.indexOf('formInput:comment') > -1 }),
            'No comment input'
        );
    });

    it('should call the callback on submit with filled fields', function() {
        var formNode = TestUtils.scryRenderedDOMComponentsWithClass(commentForm, 'commentFormNode');
        var inputs = TestUtils.scryRenderedDOMComponentsWithClass(commentForm, 'formInput');

        assert.lengthOf(formNode, 1);
        assert.lengthOf(inputs, 2);

        inputs.forEach(function(input) { input.getDOMNode().value = 'foo' });
        TestUtils.Simulate.submit(formNode[0]);

        sinon.assert.calledOnce(callback);
    });

    it('should not call the callback on submit with empty fields', function() {
        var formNode = TestUtils.scryRenderedDOMComponentsWithClass(commentForm, 'commentFormNode');

        assert.lengthOf(formNode, 1);

        TestUtils.Simulate.submit(formNode[0]);

        sinon.assert.notCalled(callback);
    });
});
