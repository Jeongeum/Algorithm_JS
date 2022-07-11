function solution(arr1, arr2) {
    let answer = [];
    // i = arr1의 행을 고정시킨다. arr1[여기][]
    // j = arr2의 열을 고정시킨다. arr2[][여기]
    // k = 각 행과 열의 값을 증가시키기 위한 수 
    // arr1의 경우 : [][0] [][1] [][2] ... / arr2의 경우 : [0][] [1][] [2][] ...
    for(let i = 0; i<arr1.length; i++) {
        let result = [];
        for(let j = 0; j<arr2[0].length; j++) {
            let sum = 0;
            for(let k = 0; k<arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            result.push(sum);
        }
        answer.push(result);
    }
    return answer;
}