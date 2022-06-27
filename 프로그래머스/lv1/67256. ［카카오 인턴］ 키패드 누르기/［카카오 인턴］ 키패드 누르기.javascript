function solution(numbers, hand) {
    let leftnum = '*';
    let rightnum = '#';
    
    return numbers.map(num => {
        if(num%3 === 1) {
            return leftClick(num);
        } else if(num !== 0 && num%3 === 0) {
            return rightClick(num);
        } else {
            // 현재 번호 위치 찾기
            let numLocation = findnum(num);
            // 현재 위치와 왼손, 오른손과의 거리 찾기
            let leftDistance = distance(findnum(leftnum), numLocation);
            let rightDistance = distance(findnum(rightnum), numLocation);
            
            if(leftDistance === rightDistance) {
                return hand === "left" ? leftClick(num) : rightClick(num);
            } else if(leftDistance < rightDistance) {
                return leftClick(num);
            } else {
                return rightClick(num);
            }
            
        }
    })
    .join("");
    
    function leftClick(num) {
        leftnum = num;
        return "L";
    }
    
    function rightClick(num) {
        rightnum = num;
        return "R";
    }
    
    function findnum(num) {
        const keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']
    ];
        
        for(let i = 0; i<4; i++) {
            for(let j = 0; j<3; j++) {
                if(keypad[i][j] === num) {
                    return [i,j];
                }
            }
        }
    }
    
    function distance(a,b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }
    
//     let leftKeypad = keypad.map(arr => arr.map(num=>num%3===1));
//     let rightKeypad = keypad.map(num => num%3===0);
    
//     //console.log(leftKeypad);
//     //console.log(rightKeypad);
//     //왼손으로 입력
//     for(let i = 0; i<numbers.length; i++) {
//         for(let j = 0; j<4; j++) {
//         if(numbers[i] === keypad[j][0]) {
//             leftnum = numbers[i];
//             result += 'L';
//         } else if(numbers[i] === keypad[j][2]) {
//             leftnum = numbers[i];
//             result += 'R';
//         } 
//         }
//     }
//     console.log(result)
}