function solution(arr) {
    let answer = arr.reduce((a,b)=> lcm(a,b),1);
    return answer;
    
    function lcm(a,b) {
      return a*b / gcd(a,b);  
    } 
    
    function gcd(a,b) {
        if(b === 0) return a;
        else return gcd(b,a%b);
    }
    
}