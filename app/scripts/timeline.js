'use strict';

module.exports = {
  hasNoCurrentLabel: function(timeline) {
    return timeline.currentLabel() === null;
  },
  
  hasNoLabelBefore: function(timeline) {
    return timeline.getLabelBefore() === null;
  },
  
  hasNoLabelAfter: function(timeline) {
    return timeline.getLabelAfter() === null;
  },

  gotoLabelBeforeAndStop: function(timeline) {
    timeline.gotoAndStop(timeline.getLabelBefore());
  },

  tweenToLabelAfter: function(timeline) {
    timeline.tweenTo(timeline.getLabelAfter());
  },
};
