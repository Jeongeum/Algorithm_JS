function solution(my_string) {
    // 문자열을 복사해서 배열로 만든다.
    let copyStr = [...my_string];
    // 배열을 순회하면서 각 문자가 소문자이면 대문자로 변환하고, 그렇지 않으면(문자가 대문자이면) 소문자로 변환한다.
    // 문자 하나하나 저장된 배열을 join("") 메서드를 이용하여 하나의 문자열로 반환한다.
    return copyStr.map(str => str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase()).join("")
}