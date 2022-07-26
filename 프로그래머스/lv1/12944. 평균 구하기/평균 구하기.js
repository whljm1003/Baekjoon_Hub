function solution(arr) {
    let leng = arr.length;
    let sum = arr.reduce((acc,cul) => acc+cul,0);
    
    return sum/leng;
}