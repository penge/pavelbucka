'use strict';

var Links = require('./links.js');

$(function() {
  Links.register();

  setTimeout(function() {
    $('#container').removeClass('invisible');
  }, 300);
});
