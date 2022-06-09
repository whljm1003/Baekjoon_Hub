function solution(n, lost, reserve) {
    let filterLost = lost.filter(e => !reserve.includes(e)).sort((a,b) => a-b);
    let filterReserve = reserve.filter(e => !lost.includes(e)).sort((a,b) => a-b);
    let answer = n-filterLost.length;
    
    for ( let i = 0 ; i < filterReserve.length ; i++) {
        let lend = filterReserve[i]
        if(filterLost.includes(lend)) {
            filterLost.splice(filterLost.indexOf(lend), 1);
            answer++;
        }else if(filterLost.includes(lend-1)) {
            filterLost.splice(filterLost.indexOf(lend-1), 1);
            answer++;
        }else if(filterLost.includes(lend+1)) {
            filterLost.splice(filterLost.indexOf(lend+1), 1);
            answer++;
        }
    }
    return answer;
}