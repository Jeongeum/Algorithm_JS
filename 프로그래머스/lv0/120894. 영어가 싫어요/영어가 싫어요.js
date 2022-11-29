function solution(numbers) {
  const numArr = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"];
  
    // 숫자 배열을 순회하면서 numbers 문자열을 각 num 기준으로 배열로 나눠준다.
    // 예를 들어, numArr이 zero일 때 numbers를 zero 기준 배열로 나누고 0으로 변환하여 문자열로 반환한다.
  numArr.forEach((num, index) => {
      numbers = numbers.split(num).join(index)
  })
    return Number(numbers)
  
}