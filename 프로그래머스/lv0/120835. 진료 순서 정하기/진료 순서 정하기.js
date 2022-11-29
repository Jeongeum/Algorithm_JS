function solution(emergency) {
    // 사본을 만들어 큰 수부터 내림차순 정렬한다.
    // 본래 배열을 순회돌면서 사본 배열에서 본래 배열값이 몇번째 인덱스에 있는지 출력
    const sorted = [...emergency].sort((a,b)=>b-a);
    return emergency.map(v => sorted.indexOf(v)+1)
}