function solution(hp) {
    let one = Math.floor(hp/5);
    let two = Math.floor((hp%5)/3);
    let three = ((hp%5)%3)/1;
    
    return one+two+three
}