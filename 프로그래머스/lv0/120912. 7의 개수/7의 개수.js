function solution(array) {
    let arrStr = array.map(num => num.toString()).join("");
    if(arrStr.match(/[7]/g)) {
        return arrStr.match(/[7]/g).length;
    } else return 0;
}