function solution(numbers) {
    var answer = [];
    let sortNumbers = numbers.sort((a,b) => a-b);
    
    for(let i=0 ; i < sortNumbers.length ; i++) {
        for(let j = i+1 ; j < sortNumbers.length ; j++) { 
            let value = sortNumbers[i] + sortNumbers[j];
            if(!answer.includes(value)) {
                answer.push(sortNumbers[i] + sortNumbers[j]);    
            }
        }
    }
    answer.sort((a,b) => a-b);   
    return answer;
}