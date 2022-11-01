function solution(cacheSize, cities) {
    // 내가 작성하던 코드
//     let arr = Array(cacheSize).fill(0);
//     let time = 0;
    
//     cities.forEach(str => {
//         if(arr[cacheSize-1] !== 0) {
//             arr.shift();
//         }
//         if(arr.includes(str)) {
//             time += 1;
//         } else {
//             time += 5;
//         }
//     })
//     return time;
    
    let arr = [];
    let time = 0;
    
    cities.forEach((str, index) => {
        str = str.toLowerCase();
        index = arr.indexOf(str);
        
        // arr안에 str이 있으면 hit -> 참조되어야 하기 때문에 해당 위치의 해당 str을 제거하여 맨 뒤로 push
        // arr안에 str이 없으면 miss -> 바로 적재해줌. but, 배열이 꽉찼다면 맨 앞의 str이 가장 참조횟수가 적은 것이므로 제거
        if(index !== -1)  {
            // hit
            arr.splice(index, 1);
            arr.push(str);
            time += 1;
        } else {
            // miss
            arr.push(str);
            time += 5;
            if(arr.length > cacheSize) {
                arr.shift();
            }
        }
    })
    return time;
}