/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  const len = nums.length;
  for (const [k, v] of nums.entries()) {
      if( k+1 >= len || v <= nums[ k+1 ]) continue;
      for( let i = 2; i<len-k;i++ ){
          if(k+i < len && v > nums[ k+i ]) return false;
      }
      count++;
      if(count>1)return false;
  }
  if(count>1)return false;
  return true;
};

checkPossibility([7,7,8,2,3])