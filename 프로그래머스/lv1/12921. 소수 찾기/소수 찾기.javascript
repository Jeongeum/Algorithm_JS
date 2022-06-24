function solution(n) {
    let prime = {};
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if(prime[i]) {
          continue;
      }
      
      for(let j = i**2; j<=n; j+=i) {
          prime[j] = true;
      }
  }
    
    const result = [];
    
    for(let i = 2; i<=n; i++) {
        if(!prime[i]) {
            result.push(i);
        }
    }
  return result.length;
}