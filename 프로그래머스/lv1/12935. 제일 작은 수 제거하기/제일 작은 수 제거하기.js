function solution(arr) {
    let copy = [...arr];
    copy = copy.sort((a,b) => a-b)[0];
    arr.forEach((e,i) => e === copy ? arr.splice(i,1) : null);
    return arr.length < 1 ? [-1] : arr;
}