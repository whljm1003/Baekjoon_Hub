function solution(lottos, win_nums) {
    let max = 0
    let min = 0       
    const ranking = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };
    
    for(let num of lottos) {
        if(num === 0) max++;
        if(win_nums.includes(num)) {
            max++;
            min++;
        };
    };   
    
    return [ranking[max],ranking[min]]
}