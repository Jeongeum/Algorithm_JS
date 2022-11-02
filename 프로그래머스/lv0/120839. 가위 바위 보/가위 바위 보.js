function solution(rsp) {
    const winObj = {2: 0, 0: 5, 5: 2};
    return [...rsp].map(x => winObj[x]).join(""); // rsp 배열 순회돌면서 winObj 객체의 키 값이 rsp 배열의 요소인 value를 반환하여 문자열로 변환한다.
}