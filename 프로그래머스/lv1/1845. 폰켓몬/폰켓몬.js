function solution(nums) {
    let result = [];
    const max = nums.length/2;
    
    nums.map(num => {
        max > result.length && !result.includes(num) ? result.push(num) : num
    });
    return result.length;
}