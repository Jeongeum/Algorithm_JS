// 의사코드 작성하기
// 각 방향으로 갈 수 있는 범위를 구한다.
// result 좌표가 각 범위와 같으면 더 이동이 불가하기 때문에 조건을 걸어준다.

function solution(keyinput, board) {
    let xMax = Math.floor(board[0]/2);
    let yMax = Math.floor(board[1]/2);
    
    let result = [0,0];
    
    keyinput.forEach(key => {
        if(key === "left" && result[0] !== -xMax) {
            result[0] -= 1;
        } else if(key === "right" && result[0] !== xMax) {
            result[0] += 1;
        } else if(key === "up" && result[1] !== yMax) {
            result[1] += 1;
        } else if (key === "down" && result[1] !== -yMax){
            result[1] -= 1;
        }
    })
    
    return result;
}