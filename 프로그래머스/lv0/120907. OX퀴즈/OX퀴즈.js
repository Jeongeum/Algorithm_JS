function solution(quiz) {
    let result = []
    for (item of quiz){
        const 연산식 = eval(item.split(' = ')[0]) // eval(19 - 6) -> 13
        const 결과값 = +item.split(' = ')[1] // string 이므로 숫자로 바꾸어준다.
        
        result.push(연산식 === 결과값 ? 'O' : 'X')
    }
    return result
}