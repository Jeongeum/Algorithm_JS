function solution(s) {
    let answer = '';
    s = s.split(" ");
    answer = s.map(word=>word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(" ");
    
    return answer;
}