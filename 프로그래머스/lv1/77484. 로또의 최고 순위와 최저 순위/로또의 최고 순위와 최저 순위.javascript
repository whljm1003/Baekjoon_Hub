function solution(lottos, win_nums) {
    let answer = [0, 0];
    const ranking = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    
    for(let num of lottos) {
        if(num === 0) answer[0]++;
        if(win_nums.includes(num)) {
            answer[0]++;
            answer[1]++;
        };
    }   
    return [ranking[answer[0]], ranking[answer[1]]]
}
