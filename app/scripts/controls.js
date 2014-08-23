'use strict';

var Animator = require('./animator.js');

module.exports = (function() { 
  var _$rewind, _$forward;
  
  var register = function($rewind, $forward) {
    _$rewind  = $rewind;
    _$forward = $forward;

    _$rewind.click(rewindClick);
    _$forward.click(forwardClick);
  };

  var rewindClick = function() {
    Animator.rewind(_$rewind, _$forward);
  };

  var forwardClick = function() {
    Animator.forward(_$rewind, _$forward);
  };

  return {
    register: register,
  };
})();
