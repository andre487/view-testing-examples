/**
 * @file
 * A list of a comments
 */
var React = require('react');

var Comment = require('./Comment/Comment.jsx');

module.exports = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment, idx) {
            return (
                <Comment key={comment + ':' + idx} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className='commentList'>
                {commentNodes}
            </div>
        );
    }
});
