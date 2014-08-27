'use strict';

module.exports = (function() {
  var register = function () {
    registerDivLinks();
    registerALinks();
  };

  var registerDivLinks = function () {
    $('div.content.link').click(function () {
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
    $('a.content.link').hover(function () {
      var $content = $(this);
      var $detailToToggle = $content.siblings('.content.detail');
      $('.content.detail').not($detailToToggle).addClass('hidden');
      $detailToToggle.toggleClass('hidden');
    });
  };

  return {
    register: register,
  };
})();
