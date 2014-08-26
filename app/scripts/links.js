'use strict';

module.exports = (function() {
  var register = function () {
    registerSpanLinks();
    registerALinks();
  };

  var registerSpanLinks = function () {
    $('span.link.content').click(function () {
      var $content = $(this);
      var $closestBlock = $content.closest('.block');
      if ($closestBlock.hasClass('styled')) {
        var $target = $closestBlock.find('.detail.block'); 
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
