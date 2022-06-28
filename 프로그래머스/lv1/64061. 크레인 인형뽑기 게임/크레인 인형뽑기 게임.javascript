function solution(board, moves) {
    moves = moves.map(num=>num-1);
    let answer = 0;
    let result = [];
    moves.forEach(move=> {
       for(let i = 0 ; i<board.length; i++) {
        let item = board[i][move];
         if(item !== 0) {
             if(result[result.length-1] === item) {
                 result.pop();
                 answer += 2;
             } else {
                 result.push(item); 
             }
            board[i][move] = 0;
             break;
        } 
    }
    })
    return answer;   
    }