function solution(phone_number) {
    let arr = phone_number.split('');
    let endNum = phone_number.slice(arr.length-4, arr.length);
    let changeNum = arr.slice(0,arr.length-4).map(e => "*").join('');
    return changeNum+endNum;
};