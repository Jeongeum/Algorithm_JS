function solution(s) {
    if(s.length === 1) return 1;
    let arrs = [];
    
    for(let i = 1; i<=parseInt(s.length/2); i++) {
        let count = 1;
        let string = '';
        for(let j = 0; j<s.length; j+=i) { // 문자열 자르는 만큼 인덱스가 달라져야 함
            const current = s.substr(j,i);
            const next = s.substr(j+i,i); // 문자를 나누는 단위만큼 다음 문자 인덱스가 이동해야함. ex) [0][1] 과 [2][3] 을 비교해야함
            if(current === next) {
                count++;
            } else {
                string = count > 1 ? string + count + current : string + current;
                count = 1;
                
            }
        }
        arrs.push(string.length);
    }
    return Math.min(...arrs);
}