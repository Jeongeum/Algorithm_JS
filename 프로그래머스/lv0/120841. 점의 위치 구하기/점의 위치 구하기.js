function solution(dot) {
    let [x,y] = dot;
    if(y>0) {
        if(x>0) return 1;
        else return 2;
    } else if(y<0) {
        if(x>0) return 4;
        else return 3;
    }
}