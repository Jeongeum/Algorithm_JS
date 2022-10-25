// numlist.sort() 콜백함수로 앞에 있는 것들을 실행
// numlist 배열에 들어있는 정수들 각각을 n으로 빼야한다.
// 뺀 값들을 비교해서 작은 것 부터 정렬한다.
// Math.abs() 를 사용하기 전에 양수의 값이 앞에오도록


function solution(numlist, n) {
    numlist.sort((a,b) => {
        const a_diff = Math.abs(a-n); // 거리
        const b_diff = Math.abs(b-n);
        
        // if(a_diff === b_diff) return b_diff - a_diff;
        if(a_diff === b_diff) return b-a;
        return a_diff - b_diff;
    })
    return numlist;
}