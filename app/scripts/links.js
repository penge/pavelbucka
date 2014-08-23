'use strict';

module.exports = (function() {
  var register = function () {
    registerSpanLinks();
    registerALinks();
  };

  var registerSpanLinks = function () {
    $('span.link.content').click(function () {
      var $content = $(this);
      if ($content.closest('.block').hasClass('styled')) {
        var $target = $($content.data('target'));
        $('.detail.block').not($target).addClass('hidden');
        $target.toggleClass('hidden');
      }
    });
  };

  var registerALinks = function () {
    $('a.link.content').hover(function () {
      var $content = $(this);
      var $detailToToggle = $content.siblings('.detail.content');
      $('.detail.content').not($detailToToggle).addClass('hidden');
      $detailToToggle.toggleClass('hidden');
    });
  };

  return {
    register: register,
  };
})();
