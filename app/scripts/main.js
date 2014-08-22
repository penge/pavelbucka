var Controls = require('./controls.js');
var Links = require('./links.js');
var Animator = require('./animator.js'); 
var Challenger = require('./challenger');

$(function() {
  Controls.register(
    $('#rewind-control'),
    $('#forward-control')
  );
  Links.register();
  Animator.animate();
  Challenger.challenge();
});
