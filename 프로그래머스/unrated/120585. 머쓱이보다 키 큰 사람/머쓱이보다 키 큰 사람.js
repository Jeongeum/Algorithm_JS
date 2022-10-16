function solution(array, height) {
    let result = array.map(tall => tall>height).filter(x => x === true).length;
    return result;
}