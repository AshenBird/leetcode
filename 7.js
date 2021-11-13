/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  if( x == 0 ){
    return x
  }
  const strX = x + '';
  const arrX = strX.split('')
  let r;
  if( x > 0  ){
    r = (arrX.reverse().join('')) * 1;
    if(Math.log2(r+1)>31){
      return 0 
    }
    return r
  }else{
    arrX.shift()
    r = ('-' + (arrX.reverse().join(''))) * 1;    
    if(Math.log2(-1*r)>32){
      return 0 
    }
    return r
  }
};

var reverse2 = function(x){

}

reverse( -1563847412 )
