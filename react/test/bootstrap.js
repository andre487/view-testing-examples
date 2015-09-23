var jsdom = require('jsdom');

var doc = global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var win = global.window = doc.defaultView;

Object.keys(win).forEach(function(key) {
    if (!(key in global)) global[key] = win[key];
});
