function solution(my_string) {
    // toLowerCase : 문자열을 모두 소문자로 변환
    // split("") : 소문자로 변환한 문자열을 배열로 나눠줌
    // sort() : 문자가 들어있는 배열을 유니코드 기준 비교하여 정렬
    // join("") : 배열로 나뉘어있는 문자를 하나의 문자열로 합침
    return my_string.toLowerCase().split("").sort().join("")
}