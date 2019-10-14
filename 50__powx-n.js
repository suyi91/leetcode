/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  return n >= 0 ? pow(x, n) : 1 / pow(x, -n)
};

var pow = function(x, n) {
  if (n === 0) return 1
  if (n % 2 === 0) return pow(x * x, n / 2)
  return x * pow(x * x, (n - 1) / 2)
}
