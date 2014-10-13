'use strict';

var Links = require('./links.js');
var Animator = require('./animator.js'); 
var Challenger = require('./challenger');

$(function() {
  Links.register();
  Animator.animate();
  Challenger.challenge();
});
