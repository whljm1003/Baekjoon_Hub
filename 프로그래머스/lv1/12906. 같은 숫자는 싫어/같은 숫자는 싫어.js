function solution(arr) {
    let result = [];
    arr.forEach((e,i) => {
        arr[i] !== arr[i+1] ? result.push(arr[i]) : null;
    })
    return result;
}