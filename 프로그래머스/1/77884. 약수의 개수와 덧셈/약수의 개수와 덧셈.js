function getDivisor(num) {
    let result = [];
    let index = 1;
    
    while(index <= num / 2) {
        if(num % index === 0) result.push(index);
        index++;
    }    
    return [...result, num];
}

function solution(left, right) {
    let answer = 0;

    for(let i = left ; i <= right ; i++) {
        const isEven = getDivisor(i).length % 2 === 0;
        isEven ? answer+= i : answer-= i;
    }
    return answer;
}