function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(babbling[i].includes(words[j])) {
            babbling[i] = babbling[i].replace(words[j], "X");
            }
        }
        babbling[i] = babbling[i].replace(/X/g, "");
        if(babbling[i].length === 0) count++;
    }
    
    return count;
}