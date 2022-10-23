function solution(my_string) {
    let result = my_string.replace(/([aeiou])/g, '');
    // replace(정규표현식, 대체문자) : 정규표현식에 매칭되는 항목을 대체문자로 변환
    return result;
}