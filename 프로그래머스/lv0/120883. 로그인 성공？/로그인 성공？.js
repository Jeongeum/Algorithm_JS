function solution(id_pw, db) {
    
    let result = '';
    db.forEach(data => {
        if(id_pw[0] === data[0] && id_pw[1] === data[1]) result = 'login'; 
        else if(id_pw[0] === data[0] && id_pw[1] !== data[1]) result = 'wrong pw';
        else if(id_pw[0] !== data[0] && id_pw[1] !== data[1]) {
            result = 'fail';
             }
    })
    return result;
}