function solution(n, k) {
    
    let price = (n*12000) + (k*2000)
    if(n >=10) {
        price = price-(Math.floor(n/10)*2000)
    }
    return price;
}