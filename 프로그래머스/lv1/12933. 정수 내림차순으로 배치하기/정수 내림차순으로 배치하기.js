function solution(n) {
    let des = `${n}`.split('').sort((a,b) => b-a).join('');
    return parseInt(des);
}