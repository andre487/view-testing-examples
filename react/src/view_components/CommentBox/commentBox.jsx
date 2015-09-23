/**
 * @file
 * Comment box: comments list and a form for comment posting
 */
var React = require('react');

var CommentForm = require('./CommentForm/CommentForm.jsx');
var CommentList = require('./CommentList/CommentList.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return { data: [] };
    },

    componentDidMount: function() {
        this.setState({ data: this.props.data });
    },

    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat(comment);

        this.setState({ data: newComments });
    },

    render: function() {
        return (
            <div className='commentBox container-fluid'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h1>Comments</h1>
                        <CommentList data={this.state.data} />
                    </div>
                </div>
                <div className='row commentFormContainer'>
                    <div className='col-xs-12'>
                        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                    </div>
                </div>
            </div>
        );
    }
});
