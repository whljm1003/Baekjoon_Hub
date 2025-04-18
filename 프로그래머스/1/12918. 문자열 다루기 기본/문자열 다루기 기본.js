function solution(s) {
    let answer = false;
    
    if(s.length === 4 || s.length === 6) {
        
        const onlyNumber = /^[0-9]+$/.test(s);
        
        return onlyNumber ? true : false;    
    }
    
    return answer;
    
}