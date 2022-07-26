function solution(price, money, count) {
    let sum = 0;
    while(count > 0) {
        sum += price * count;
        count--;
    }
    return money > sum ? 0 : sum-money;
}

// 가우스 공식 활용법으로 sum 구하기
// price * count * (count + 1) / 2;
// 3 * 4 * (4+1) / 2;