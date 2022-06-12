function solution(id_list, report, k) {
    let mail = new Array(id_list.length).fill(0);
    let result = {};
    
    id_list.map(user =>{
        result[user] = [];
    });
    
    report.map(user =>{
        const [id, report_id] = user.split(" ");
        if(!result[report_id].includes(id)) {
            result[report_id].push(id);
        }
    })
    
    for(const key in result) {
        if(result[key].length>=k) {
            result[key].map(user => {
                mail[id_list.indexOf(user)] += 1;
                
            })
        }
    }
    return mail;
}