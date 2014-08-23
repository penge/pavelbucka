'use strict';

var Suffixer = require('./suffixer.js');

module.exports = {
  suffixWelcomeContent: function (round) {
    var text = Suffixer.prependSuffix(round, 'Hello!');
    $('#welcome-content').text(text);
  },
};
