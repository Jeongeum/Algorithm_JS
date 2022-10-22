function solution(num_list) {
    let result = [0,0];
    num_list.forEach(num => {
        if(num%2 === 0) {
            result[0]++;
        } else {
            result[1]++;
        }
    })
    return result;
}