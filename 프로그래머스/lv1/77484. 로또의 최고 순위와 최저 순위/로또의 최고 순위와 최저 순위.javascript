function solution(lottos, win_nums) {
    const zero = lottos.filter(num => num === 0).length;
    const match = win_nums.filter(num =>lottos.includes(num)).length;
    
    const rank = [6,6,5,4,3,2,1];
    
    const max = rank[zero+match];
    const min = rank[match];
    
    
    return [max, min];
}