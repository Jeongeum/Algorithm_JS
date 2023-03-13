function solution(common) {
    // 등차
    if(common[1] - common[0] === common[2] - common[1]) {
        return common.pop() + (common[1] - common[0])
    } else {
        // 등비
        return common.pop() * (common[1] / common[0])
    }
}