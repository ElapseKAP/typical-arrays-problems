exports.min = function min (array) {
  if (!array || !array.length) return 0;

  let min = array[0];

  for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
          min = array[i];
      }
  }

  return min;
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;

  let max = array[0];

  for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
          max = array[i];
      }
  }

  return max;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  let sum = array.reduce(function (acc, curVal) {
      return acc + curVal;
  });

  return sum / array.length;
}
