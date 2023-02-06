// 의사 코드 작성하기
// 문자열에서 자연수만 남겨둔다. -> Number로 형변환해서 NaN이 되게하면 숫자만 남을듯?
// 자연수들을 모두 더한다.

function solution(my_string) {
    let result = 0;
    
    for(let i = 0; i<my_string.length; i++) {
        let strNum = '';
        while(!isNaN(Number(my_string[i]))) {
            // 숫자인 문자열을 (NaN이 아닌 문자열) strNum 변수에 문자열 형태로 넣는다.
            strNum += my_string[i];
            i++;
        }
        
        // strNum가 문자이니까 Number형으로 변환해서 더해준다.
        result+= +strNum;
    }
    
    
   return result;

}