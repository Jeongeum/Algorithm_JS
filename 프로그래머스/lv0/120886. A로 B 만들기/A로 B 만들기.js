function solution(before, after) {
    // 입출력 예 1번에 속은 답 ...^^
    // 단순 문자 뒤집어서 after를 만들 수 있는가?
    // before 문자열을 뒤집었을 때 after와 같다면 1을 반환하고 같지 않다면 0을 반환한다.
    // return before.split("").reverse().join("") === after ? 1 : 0
    
    // before의 각 문자들 순서를 바꾸어서 after가 될 수 있는가를 물어보는 문제
    // before 와. after를 정렬해서 같으면 순서를 바꾸어도 똑같은 문자열을 만들 수 있다.
    
    // console.log(before.split("").sort().join(""))
    // console.log(after.split("").sort().join(""))
    
    return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}