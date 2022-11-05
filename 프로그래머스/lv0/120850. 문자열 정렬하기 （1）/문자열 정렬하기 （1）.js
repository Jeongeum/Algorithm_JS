function solution(my_string) {
    // 정규식에 매칭되는 항목을 배열로 반환하는데, 이때 문자열로 반환되기 때문에 숫자로 바꾸어준다.
    const result = my_string.match(/[0-9]/g).map(num =>parseInt(num));
    return result.sort((a,b) => a-b);
}