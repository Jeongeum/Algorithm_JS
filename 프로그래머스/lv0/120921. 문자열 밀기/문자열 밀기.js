function solution(A, B) {
    // B를 반복하게끔 문자열을 붙여서 A가 시작되는 부분의 인덱스를 찾으면 된다. 그럼 몇번 밀었는지 알 수 있다.
    return (B+B).indexOf(A);
}