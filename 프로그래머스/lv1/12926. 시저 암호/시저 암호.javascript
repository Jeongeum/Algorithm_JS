function solution(s, n) {
    // let result ="";
    // for(let i=0; i<s.length; i++) {
    //     if(s[i]==="z") {
    //         result[i] = "a";
    //     } else {
    //         result[i] = s[i]+1;
    //     }
    // }
    // return result;
    return s.split("")
    .map(char=> {
         if(char === " ") return " ";
    const num = char.charCodeAt(0)+n;
    if((num>90 && (num-n)<=90) || num>122) {
        return String.fromCharCode(num-26);
    } else{
        return String.fromCharCode(num);
    }
    
    })
    .join("");
    
    
}