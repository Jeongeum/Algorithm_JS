function solution(i, j, k) {
    const reg = `/${k}/g`;
    let count = 0;
    for(let num = i; num<=j; num++) {
        count += ('' + num).split("").filter(n => +n === k).length;
        
        // i부터 j까지의 숫자를 문자열로 바꾸어준 후 배열로 나눈다.
        // 배열 내 각 문자열들을 다시 숫자로 바꾸고 k와 같다면 같은 개수만큼 count에 넣는다.
        // console.log(`num = ${num}, count = ${count}`)
    }
    return count;
}