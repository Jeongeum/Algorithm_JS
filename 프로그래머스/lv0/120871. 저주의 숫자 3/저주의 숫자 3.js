function solution(n) {
    let result = Array.from({length: n}, () => 0);
    for(let i = 0; i<=n; i++) {
        for(let j = 1; j<=200; j++) {
            if(j % 3 !== 0 && !String(j).includes('3')) {
            result[i] = j;
                i++;
        }
        }
        
    }
    console.log(result)
        return result[n-1];
}