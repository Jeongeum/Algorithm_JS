function solution(lines) {
    let result = 0;
    let lineArr = new Array(200).fill(0);
    
    
    for(let i = 0; i < 3; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        for(let j = start; j < end; j++) {
            lineArr[j+100] += 1;
        }
    }
    
    lineArr.forEach((num, index) => {
        num > 1 ? result++ : index++
    });
    
    return result;
}