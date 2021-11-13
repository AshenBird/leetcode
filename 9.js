/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if( x < 0 )return false;
  if( x === 0 )return true
  let list = [];
  let _x = x;
  for( let i= 10;;i*=10 ){
      const b = _x%i;
      _x = _x - b
      list.push(b/i*10)
      console.log(
        `
        除数：${i}
        余数：${b}
        操作数：${_x}
        数据集：${list}
        `  
      );
      if(_x===0)break;
  }
  if( x === (list.join(''))*1 )return true;  
  return false
};
console.log(isPalindrome(121))
