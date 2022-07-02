function solution(n, lost, reserve) {
    let studentCount = new Array(n).fill(1);
    let result = 0;
    for(const student of reserve) studentCount[student-1]++;
    for(const student of lost) studentCount[student-1]--;
    
    for(let no = 0; no<n; no++) {
        if(studentCount[no] === 2 && studentCount[no-1] === 0) {
            studentCount[no]--;
            studentCount[no-1]++;
        } else if(studentCount[no] === 2 && studentCount[no+1] === 0) {
            studentCount[no]--;
            studentCount[no+1]++;
        }
    }
    for(let i = 0; i<n; i++) {
        if(studentCount[i] >= 1) {
            result++;
        }
    }
        
        return result;
}