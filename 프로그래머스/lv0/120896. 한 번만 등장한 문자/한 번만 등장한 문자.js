// 의사코드 작성하기
// 문자열 s 내의 문자들을 하나하나 비교해야 하므로 배열로 변환한다.
// result가 사전순으로 정렬되어야 하기 때문에 우선 문자열 배열을 정렬한다.
// 배열을 for문으로 돌면서 각 item들이 배열에서 처음 등장하는 위치와 마지막 등장하는 위치가 같다면 한번만 쓰인 것이므로 result 배열에 push 한다.
// 처음 item이 등장하는 위치와 마지막 등장하는 위치가 다르면 해당 item은 배열에서 여러번 쓰였다는 의미이다.
// result를 join 하여 문자열로 만들고 반환한다.

// 새롭게 알게된 것 : lastIndexOf


function solution(s) {
    let result = [];
    let str = s.split("");
    
    str.sort();
    
    str.forEach((item) => {
        if(str.indexOf(item) === str.lastIndexOf(item)) {
            result.push(item);
        }
    })
    
    return result.join("");
}