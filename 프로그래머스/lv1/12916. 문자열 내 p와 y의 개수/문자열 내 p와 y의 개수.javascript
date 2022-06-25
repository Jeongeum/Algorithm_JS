function solution(s){
    const change = s.toLowerCase();
    return change.split("p").length === change.split("y").length;
}