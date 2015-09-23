/**
 * @file
 * Main app file which connects all the components
 */
var React = require('react');

var data = require('../data/comments.js');
var CommentBox = require('./view_components/CommentBox/CommentBox.jsx');

React.render(
    <CommentBox data={data} />,
    document.getElementById('container')
);
