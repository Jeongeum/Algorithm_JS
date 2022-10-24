// function solution(id_pw, db) {
    
//     let result = '';
//     db.map(data => {
//         if(id_pw[0] === data[0] && id_pw[1] === data[1]) {
//             console.log('로그인')
//             result = 'login'; 
//         }
//         else if(id_pw[0] === data[0] && id_pw[1] !== data[1]) result = 'wrong pw';
//         else if(id_pw[0] !== data[0] && id_pw[1] !== data[1]) {
//             result = 'fail';
//              }
//     console.log(`data : ${data} 일 때, result = ${result}`)
//     })
//     return result;

// }


function solution (id_pw, db) {
    let result ='';
    db.map(data => {
        let checkedId = id_pw[0] === data[0]
        let checkedPw = id_pw[1] === data[1]
       if(checkedId && checkedPw) {
           return result = 'login'
       } else if (checkedId && !checkedPw || !checkedId && checkedPw) {
           return result = 'wrong pw'
       } else {
           return result = 'fail'
       }
        console.log(`data : ${data} 일 때, result = ${result}`)
    })
    return result
}
// map 메서드를 쓰면서 db 내 중간 부분에서 아이디비번 일치한 결과로 최종 결과까지 가려면 맨 마지막 값은 비번이 같아야 한다.
// 결국 