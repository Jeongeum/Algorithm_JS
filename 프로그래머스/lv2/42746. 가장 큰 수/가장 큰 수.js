function solution(numbers) {
    // 배열 내 원소가 모두 0일 경우 0을 붙인 값이 아닌 0 하나만 출력
    // 그렇지 않다면 배열 내 원소를 문자열로 바꾼 후 비교 정렬하여 붙여줌
    
    if(numbers.every((num) => num === 0)) {
        return '0';
    } else {
        return numbers.map(num=> num.toString()).sort((a,b)=>(b+a)-(a+b)).join("");
    }
} 

/* 다른 방법

function solution(numbers) {
    return numbers.sort(sortFunc)
   
}

const sortFunc =  (a,b) =>{
    const compareA = parseInt(a.toString() + b.toString())
    const compareB = parseInt(b.toString() + a.toString())
    console.log(compareA)
    console.log(compareB)
    console.log(`compareB - compareA:${compareB - compareA}`)
    return compareB - compareA
}
*/
