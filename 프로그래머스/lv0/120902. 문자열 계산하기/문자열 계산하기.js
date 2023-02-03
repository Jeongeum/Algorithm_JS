// 의사코드 작성하기
// 문자열을 배열로 만들어준다.
// 숫자를 string에서 number로 형변환 시켜준다.
// 연산자가 +라면 더하고 아니면 뺀다. (연산자가 + 이거나 - 둘중 하나라고 했으니 삼항연산자를 써도 될 것 같다.)

// 위의 방법 틀려서 다른 방법 의사코드 작성해보기 (코드실행은 되지만 채점했을 때 2문제 빼고 모두 실패)
// 이유 : 제한사항에서 중간 계산 값이라는 말이 나오는데 이게 아마도 "10 - 4 + 1" 처럼 연산할 경우를 이야기하는 것 같다.
// 우선 가장 앞에 있는 값 먼저 숫자로 만들어주고 
// 배열을 순회하면서 연산자가 나왔을 경우 연산자 뒤에있는 값을 더하거나 빼서 축적하는 방식으로 해야할 것 같다.

function solution(my_string) {
//     let arr = my_string.split(" ");
//     let num1 = Number(arr[0]);
//     let num2 = Number(arr[2]);
  
//     return arr[1] === "+" ? num1+num2 : num1-num2;
    
    let arr = my_string.split(" ");
    let result = Number(arr[0]);
    
    arr.forEach((item, index) => {
        if(item === "+") {
            result += Number(arr[index+1]);
        } 
        
        if(item === "-") {
            result -= Number(arr[index+1]);
        }
    });
    
    
    return result;
}