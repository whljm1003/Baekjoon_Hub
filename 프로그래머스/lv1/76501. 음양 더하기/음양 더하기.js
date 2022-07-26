function solution(absolutes, signs) {
    let answer = 0;
    answer = absolutes.reduce((acc,cul,idx) => {
        if(!signs[idx]) {
            return acc+cul*-1
        }else {
            return acc+cul      
            };
    },0);
    return answer;
}