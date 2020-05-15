const makeNum = num => {
    let result = [];
    for (let i = 0; i < num.length; i++) {
       if ( num[i]% 2 == 0 ) {
          result.push(num[i]);
       }
    }
    return result;
}

makeNum([1,2,3,4,5,6]);
// [2,4,6] 출력
