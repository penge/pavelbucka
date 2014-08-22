module.exports = (function () {
  var ordinalSuffixOf = function (number) {
    var j = number % 10;
    if (j == 1 && number != 11) { return number + "st"; }
    if (j == 2 && number != 12) { return number + "nd"; }
    if (j == 3 && number != 13) { return number + "rd"; }
    return number + "th";
  };

  var prependSuffix = function(number, text) {
    var suffix = ordinalSuffixOf(number);
    return suffix + ' ' + text;
  };

  return {
    ordinalSuffixOf: ordinalSuffixOf,
    prependSuffix: prependSuffix,
  };
})();
