function solution(array, commands) {
    let answer = [];
    for(let i = 0; i<commands.length; i++) {
        let sliced = array.slice(commands[i][0] - 1, commands[i][1]);
        sliced.sort((a,b) => a-b);
        answer.push(sliced[commands[i][2] - 1]);
    }
    
    return answer;
}