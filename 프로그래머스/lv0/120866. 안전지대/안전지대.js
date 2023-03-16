function solution(board) {
    // (0,0) 기준 위,아래,왼쪽,오른쪽,대각선의 좌표
    // board 2차원배열을 그냥 사용할 수 없으니 깊은 복사
    // 깊은 복사 : 기존 배열은 그대로 두고 완전히 독립적이도록 새로운 배열을 만드는 것
    const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
    const dy = [0, 0, -1, 1, -1, 1, -1, 1];
    const dangerBoard = JSON.parse(JSON.stringify(board));
    let count = 0;
    
    // 탐색 -> 0이면 지뢰가 없으니 무시, 1이면 지뢰와 인접한 곳을 1로 채운다.
    for(let x = 0; x < board.length; x++) {
        for(let y = 0; y < board.length; y++) {
            if(!board[x][y]) continue;
            
            // board[x][y]가 1이면 현재 x와 y좌표의 인접한 곳의 좌표를 구해서
            for(let i = 0; i < 8; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                // 배열은 0부터 시작하므로 nx와 ny는 0보다 크거나 같아야한다.
                // 인접한 좌표를 전부 1로 채운다.
                if(nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
                    dangerBoard[nx][ny] = 1;
                }
            }
        }
    }
    // 좌표에서 0인 부분(지뢰와 인접하지 않은 부분)을 카운팅하여 반환한다.
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(dangerBoard[i][j] === 0) count++
        }
    }
    return count;
}