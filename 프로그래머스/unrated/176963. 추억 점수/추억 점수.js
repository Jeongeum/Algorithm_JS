function solution(name, yearning, photo) {
    let result = new Array(photo.length).fill(0);
    let obj = {};
    
    name.forEach((person, idx) => {
        obj[person] = yearning[idx];
    })
    
    photo.forEach((group,i) => {
        group.forEach((p) => {
            if(Object.keys(obj).includes(p)) {
                result[i] += (obj[p]);
            } 
        })
    })
    return result;
}