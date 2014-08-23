var DocumentSuffixer = require('./documentSuffixer.js');
var Element = require('./element.js');
var Timeline = require('./timeline.js');

module.exports = (function() {
  var _timeline = null;
  
  var addBlockTween = function(id) {
    var $el = $('#' + id);
    var tween = TweenMax.to($el, .02, {
      className: '+=styled',
      ease: Power1.easeOut,  
    });

    _timeline.add(tween, id);
  };

  var animate = function () {
    _timeline = new TimelineMax();
    _timeline.delay(1);

    addBlockTween('welcome'); 
    addBlockTween('developer'); 
    addBlockTween('help'); 
    addBlockTween('hire-me'); 
    addBlockTween('projects'); 
    addBlockTween('work'); 
    addBlockTween('contact-me'); 
    
    _timeline.call(function() {
      $('#controls').removeClass('hidden');
    });
  };
  
  var reset = function(round) {
    DocumentSuffixer.suffixWelcomeContent(round);
    _timeline.gotoAndStop('welcome');
    TweenMax.delayedCall(1.8, function() {
      _timeline.play();
    });
  };

  var rewind = function($rewind, $forward) {
    if (Timeline.hasNoCurrentLabel(_timeline)) {
      return;
    }
    Timeline.gotoLabelBeforeAndStop(_timeline);
    if (Timeline.hasNoLabelBefore(_timeline)) {
      Element.deactivate($rewind);
    }
    Element.activate($forward);
  };

  var forward = function($rewind, $forward) {
    if (Timeline.hasNoCurrentLabel(_timeline)) {
      return;
    }
    Timeline.tweenToLabelAfter(_timeline);
    if (Timeline.hasNoLabelAfter(_timeline)) {
      Element.deactivate($forward);
    }
    Element.activate($rewind);
  };

  return {
    animate: animate,
    reset: reset,
    rewind: rewind,
    forward: forward,
  };
})();
