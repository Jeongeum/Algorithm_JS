function solution(n, numlist) {
    let result = [];
    numlist.forEach(num => {
        if(num%n === 0) result.push(num);
        // numlist 내 값들이 n의 배수라면 result 배열로 push
    })
    return result;
}