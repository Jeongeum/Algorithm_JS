function solution(left, right) {
    let result = 0;
    for(let i=left; i<=right; i++) {
         if(div(i) % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    return result;
}

function div(num) {
    let count = 0;
    for(let j = 1; j<=num; j++) {
             if(num%j === 0) {
                 count++;
             }
        
         }
    return count;
}
