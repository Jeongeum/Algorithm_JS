function solution(numbers) {
    let arr = numbers.split("");
    let answer = [];

const isPrimeNum = (num) => {
    if(num[0] === '0' || num <=1) return false;
    for(let i = 2; i*i <= num; i++) {
        if(num%i === 0) return false;
    }
    return true;
}

const getPermutation = (arr, fixed) => {
    if(arr.length >= 1) {
        for(let i = 0; i<arr.length; i++) {
            const newNum = fixed + arr[i];
            const copyArr = [...arr];
            copyArr.splice(i,1);
            if(!answer.includes(newNum) && isPrimeNum(newNum)) {
                answer.push(newNum)
            }
            getPermutation(copyArr,newNum);
        }
    }
}
getPermutation(arr,'');
    return answer.length;
}