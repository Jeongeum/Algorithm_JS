// 의사코드 작성하기
// dic 배열을 순회하면서 spell 배열의 값들이 dic 배열 값에 포함된다면 count를 매번 증가시킨다. 
// 즉, spell 배열 내 값들이 dic 배열 내 값 중에 모두 포함되어있다면 spell 개수만큼 count가 늘어날 것이다.
// 증가시킨 값이 spell의 길이와 같다면 1을 리턴한다.
// 결과 : 실패 -> 일단 코드가 너무 길고.. count와 spell.length가 같으면 거기서 멈춰야 하는데 그러지 않고 있었다.

// 새로 생각한 것 : every 메서드 사용해서 코드 길이 줄이기

function solution(spell, dic) {
//     let count = 0;
//     let result;
//     dic.forEach((str, index) => {
//         count = 0;
//         spell.forEach(s => {
//             if(str.includes(s)) count++;
//         })
        
//         if(count === spell.length) {
//             result = 1;
//         } else {
//             result = 2;
//         }
//     })
    
//     return result;
    
    let count = 0;
    dic.forEach(str => {
        if(spell.every(s => str.includes(s))) {
            count++;
        }
    })
    
    return count === 0 ? 2 : 1;
}