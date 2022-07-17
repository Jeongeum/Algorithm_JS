function solution(n) {
    let nextNum = n+1;
    let iCount = n.toString(2).split("").filter(num => num==='1').length;
    
    while(nextNum>n) {
        let nextCount = nextNum.toString(2).split("").filter(num => num==='1').length;
        if(nextCount === iCount) {
            return nextNum;
        } else {
            nextNum++;
        }
    }
}