'use strict';

module.exports = {
  activate: function($el) {
    $el.addClass('active');
  },

  deactivate: function($el) {
    $el.removeClass('active');
  },

  isStyled: function($el) {
    return $el.hasClass('styled');
  },

  isUnstyled: function($el) {
    return !$el.hasClass('styled');
  },

  hide: function($el) {
    $el.addClass('hidden');
  },
  
  show: function($el) {
    $el.removeClass('hidden');
  },
};
