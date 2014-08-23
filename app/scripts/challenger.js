'use strict';

var Element = require('./element.js');
var Animator = require('./animator.js');
var DocumentSuffixer = require('./documentSuffixer.js');

module.exports = (function() {
  var _welcomeClicks = 0;
  var _round = 1;

  var challenge = function () {
    handleWelcomeClicks();
    startRoundChallenge();
  };

  var handleWelcomeClicks = function () {
    $('#welcome').click(function () {
      if (Element.isUnstyled($(this))) {
        return;
      }
      _welcomeClicks += 1;
      if (_welcomeClicks % 10 === 0) {
        _round += 1;
        Animator.reset(_round);
      }
    });
  };
  
  var startRoundChallenge = function () {
    setInterval(function () {
      var localRound = _round; 
      if (localRound % 5 === 0 && Element.isStyled($('#welcome'))) {
        $('#welcome-content').text('Can you do more?');
        setTimeout(function () {
          if (localRound == _round) {
            DocumentSuffixer.suffixWelcomeContent(_round);
          }
        }, 3000);
      }
    }, 2000);
  };

  return {
    challenge: challenge,
  };
})();
