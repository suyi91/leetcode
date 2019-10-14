/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === val) {
      nums.splice(idx, 1)
      idx--;
    }
  }
  return nums.length;
};
