function solution(new_id) {
    let result = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g,"")
    .replace(/\.+/g,".")
    .replace(/^\.|\.$/g,"")
    .replace(/^$/g,"a")
    .slice(0,15)
    .replace(/\.$/g,"");
    
    if(result.length === 1) {result = result[0].repeat(3)}
    if(result.length === 2) {result = result+result[1]}
    
    return result;
}