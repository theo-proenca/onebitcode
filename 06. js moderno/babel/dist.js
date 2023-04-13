"use strict";

var res = document.querySelector('div#res');
function mediaAritSimp() {
  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }
  var total = valores.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return total / valores.length;
}
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(mediaAritSimp(2, 4, 2, 10, 100, 300, 500)));
function mediaAritPond() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var total = numbers.reduce(function (accum, _ref) {
    var _ref2;
    var num = _ref.num,
      wei = _ref.wei;
    return accum + ((_ref2 = num * wei) !== null && _ref2 !== void 0 ? _ref2 : 1);
  }, 0);
  var totalWeight = numbers.reduce(function (accum, weig) {
    var _ref3;
    return (_ref3 = accum + weig.wei) !== null && _ref3 !== void 0 ? _ref3 : 1;
  }, 0);
  return total / totalWeight;
}
console.log("M\xE9dia Aritm\xE9tica Ponderada: ".concat(mediaAritPond({
  num: 9,
  wei: 3
}, {
  num: 7,
  wei: 1
}, {
  num: 10,
  wei: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return mediaAritSimp(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 4, 2, 10, 100, 300, 500)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var qty = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  qty.sort(function (a, b) {
    return b[1] - a[1];
  });
  return qty[0][0];
};
console.log("Moda: ".concat(mode(2, 4, 2, 10, 100, 300, 500)));
