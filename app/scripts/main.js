var Controls = require('./controls.js');
var Links = require('./links.js');
var Animator = require('./animator.js'); 
var Challenger = require('./challenger');

$(function() {
  Controls.register(
    $('#rewind'),
    $('#forward')
  );
  Links.register();
  Animator.animate();
  Challenger.challenge();
});
