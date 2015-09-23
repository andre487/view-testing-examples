/**
 * @file
 * Form for the new comment posting
 */
var React = require('react');

module.exports = React.createClass({
    handleSubmit: function(e) {
        var author = this.elem('author').value.trim();
        var text = this.elem('text').value.trim();

        if (!text || !author) return;

        this.props.onCommentSubmit({ author: author, text: text });

        this.elem('author').value = '';
        this.elem('text').value = '';

        e.preventDefault();
    },

    elem: function(refName) {
        return React.findDOMNode(this.refs[refName]);
    },

    render: function() {
        return (
            <div className='commentForm'>
                <h2>Add your comment</h2>
                <form className='commentFormNode' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input ref='author' type='text' className='form-input form-input_author form-control' placeholder='Your name' />
                    </div>
                    <div className='form-group'>
                        <input ref='text' type='text' className='form-input form-input_comment form-control' placeholder='Say something...' />
                    </div>
                    <input type='submit' className='form-submit btn btn-primary' value='Post' />
                </form>
            </div>
        );
    }
});
