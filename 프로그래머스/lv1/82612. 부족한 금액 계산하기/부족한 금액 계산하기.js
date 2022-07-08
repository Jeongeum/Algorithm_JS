function solution(price, money, count) {
    for(let i = 1; i<=count; i++) {
        money -= price*i;
    }
    if(money<0) {
        return money*(-1);
    }
    return 0;
}