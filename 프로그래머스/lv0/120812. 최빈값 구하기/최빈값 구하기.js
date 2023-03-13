function solution(array) {
    let set = [...new Set(array)];
    let count = Array.from({length:set.length}, () => 0);
    let result = 0;
   
    array.forEach((num) => {
        set.forEach((setNum, i) => {
            if(num === set[i]) {
                count[i]++;
            }
        })
        
    }) 
    let sort = [...count].sort((a,b) => b-a); // 카운트가 큰 것 부터 내림차순 정렬
    
    if(sort[0] === sort[1]) {
        return -1;
    } else {
        result = set[count.indexOf(Math.max(...count))];
    }
    
    return result;
    
}