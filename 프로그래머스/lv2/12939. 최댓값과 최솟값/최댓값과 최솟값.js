function solution(s) {
    s = s.split(" ").sort((a,b) => a-b);
    return `${Math.min(...s)} ${Math.max(...s)}`    
}