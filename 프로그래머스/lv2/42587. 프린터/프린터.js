function solution(priorities, location) {
    let files = priorities.map((priority,index) => ({
        location:index === location, priority:priority
    }));
    let rank = 0;
    while(true){
        let shifted = files.shift(); // files의 맨 앞의 값을 제거하고 shifed 변수에 저장한다.
        if(files.some((file)=> shifted.priority < file.priority)) { // 만약, files의 배열 안의 각각의 priority가 shifted의 friority보다 크다면 (맨 앞의 문서 중요도보다 중요도가 큰 문서가 있다면) 
            files.push(shifted); // 맨 앞의 문서를 files의 맨 뒤로 보낸다.
        } else {
            rank++; // 맨 앞의 문서가 중요도가 가장 높다면 rank를 증가시킨다. (rank는 출력 순서)
            if(shifted.location) return rank; // 만약, 맨앞의 문서 중요도가 내가 요청한 문서의 중요도와 같다면 rank를 반환한다.
        }
    }
}