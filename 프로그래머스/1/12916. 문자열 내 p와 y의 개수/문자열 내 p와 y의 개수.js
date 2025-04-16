function solution(s){
    function count(target) {
        return s.toLowerCase().split('').filter(e => e === target).length;
    }
    
    return Boolean(count("p") === count("y"));
}