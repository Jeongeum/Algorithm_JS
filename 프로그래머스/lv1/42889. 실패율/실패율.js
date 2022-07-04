function solution(N, stages) {
    let result = [];
    
    for(let i = 1; i<=N; i++) {
        const reach = stages.filter((x)=> x >= i).length;
        const people = stages.filter((x)=> x === i).length;
        
        result.push([i, people/reach]);
    }
    result.sort((a,b)=>b[1]-a[1]);
    return result.map((x)=> x[0]);
}