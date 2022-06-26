function solution(arr)
{
    let answer = [];
    arr.forEach((num, index) => {
        if(arr[index] === arr[index+1]) return;
        answer.push(num);
    })
    
    return answer;
}