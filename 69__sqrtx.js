/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return binarySearch(0, x, x)
};

var binarySearch = function(min, max, x) {
  if (min ** 2 === x) return min
  if (max ** 2 === x) return max
  if (max - min <= 1) return min
  const half = Math.floor((min + max) / 2)
  if (half ** 2 === x) return half
  if (half ** 2 < x) return binarySearch(half, max, x)
  return binarySearch(min, half, x)
}
