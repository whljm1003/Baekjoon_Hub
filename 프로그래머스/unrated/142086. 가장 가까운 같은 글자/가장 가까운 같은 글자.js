function solution(str) {
    const newArr = str.split('');
    const result = [];

    for(let i = 0 ; i < newArr.length ; i++) { 
        const leftArr = newArr.slice(0, i).lastIndexOf(newArr[i]);
        if(leftArr === -1) {
            result.push(-1);
        }else {
            result.push(i - leftArr);
        };
    };
    
    return result;
}