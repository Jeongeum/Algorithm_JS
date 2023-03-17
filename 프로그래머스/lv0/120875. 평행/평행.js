function solution(dots) {
//     // 기울기를 담을 배열
//     let arr = [];
    
//     for(let i = 0; i < dots.length; i++) {
//         for(let j = i+1; j < dots.length; j++) {
//             // 기울기 = y좌표 차이 / x좌표 차이
//             const currentLean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            
//             // 기울기가 같다면 평행 조건 만족하므로 1 반환
//             if(arr.includes(currentLean)) return 1
//             arr.push(currentLean);
//         }
//     }
//     return 0;
    
    let result = 0;
    
    function calc(a,b,c,d) {
        abCurrentLean = (b[1] - a[1]) / (b[0] - a[0]);
        cdCurrentLean = (d[1] - c[1]) / (d[0] - c[0]);
        
        if(abCurrentLean === cdCurrentLean) result+=1;
    }
    
    calc(dots[0], dots[1], dots[2], dots[3]);
    calc(dots[0], dots[2], dots[1], dots[3]);
    calc(dots[0], dots[3], dots[1], dots[2]);
    
    return result > 0 ? 1 : 0;
}
