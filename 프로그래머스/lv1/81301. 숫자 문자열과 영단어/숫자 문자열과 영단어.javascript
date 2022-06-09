function solution(s) {
    let answer = s;
    let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    while(isNaN(answer)){
        for(let i = 0 ; i < str.length ; i++) {
            if(s.includes(str[i])) {
                answer = answer.replace(str[i], i);
            }
        }
    }
    return Number(answer);
}