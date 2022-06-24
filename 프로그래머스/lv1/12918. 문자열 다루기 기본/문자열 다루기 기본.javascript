function solution(s) {
    const reg = /^[0-9]*$/g;
    return reg.test(s) && (s.length === 4 || s.length === 6);
    
    
}