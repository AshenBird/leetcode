/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let r = [];
  let bs = new Map([])
  for( const k of nums.keys() ){
      const a = nums[k];
      const b = target - a;
      if( bs.has(b) )return [ bs.get(b), k ]
      bs.set( a, k );
  }
};

twoSum(
  [2,7,11,15],
  9
);
