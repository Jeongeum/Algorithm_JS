function solution(strlist) {
    let result = [];
    strlist.forEach((str, i) => {
        result[i] = str.length;
    })
    return result;
}