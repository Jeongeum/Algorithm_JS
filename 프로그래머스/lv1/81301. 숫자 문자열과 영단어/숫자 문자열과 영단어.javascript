function solution(s) {
    const numbers = ["zero","one","two","three","four","five","six","seven","eight","nine",];
    
    for(let i = 0; i < 10; i++) {
        s=s.split(numbers[i]).join(i);
    }

    return Number(s);
}