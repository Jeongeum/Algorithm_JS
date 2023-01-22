// 의사코드 작성하기
// my_string을 배열에 담고
// 배열 0부터 길이만큼 for문 돌면서 이미 있는 원소인지 확인하기
// 있으면 비교하려는 원소를 없애기

function solution(my_string) {
    let arr = [];
    let copyArr = [];
    
    for(let i=0; i<my_string.length; i++) {
        arr[i] = my_string[i];
        copyArr[i] = arr[i];
    }
    
    for(let i = 0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j,1);
                
                j--;
            }
        }
    }
    
    
    return arr.join("");
}