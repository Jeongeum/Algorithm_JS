function solution(cipher, code) {
    let result = "";
    for(let i = 0; i<cipher.length; i++) {
        if((i+1)%code === 0) {
            result += cipher[i]
        }
    }
        return result;
}