function solution(cards1, cards2, goal) {
    let result = true;
    
    goal.map((str) => {
        cards1[0] === str ? cards1.shift() : cards2[0] === str ? cards2.shift() : result = false;
    })
    return result ? 'Yes' : 'No';
}