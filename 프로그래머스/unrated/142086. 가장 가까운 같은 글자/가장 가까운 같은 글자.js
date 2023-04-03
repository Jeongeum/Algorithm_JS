function solution(s) {
    let result = [];
    let copyS = "";
    
    [...s].forEach((str,i) => {
        result[i] = copyS.includes(str) ? i - copyS.lastIndexOf(str) : -1
        
        copyS += str;
    })
   
    return result;
}