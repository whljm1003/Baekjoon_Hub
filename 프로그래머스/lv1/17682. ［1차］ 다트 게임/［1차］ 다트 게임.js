function solution(arr) {
     let answer = "";
        let tmp = [];
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
          if (!isNaN(Number(arr[i]))) {
            if (num !== 0) {
              num += arr[i];
              num = Number(num);
            } else {
              num = Number(arr[i]);
            }
          } else {
            if (arr[i] === "S") {
              tmp.push(Math.pow(num, 1));
              num = 0;
            }
            if (arr[i] === "D") {
              tmp.push(Math.pow(num, 2));
              num = 0;
            }
            if (arr[i] === "T") {
              tmp.push(Math.pow(num, 3));
              num = 0;
            }
            if (arr[i] === "*") {
              tmp[tmp.length - 1] = tmp[tmp.length - 1] * 2;
              tmp[tmp.length - 2] = tmp[tmp.length - 2] * 2;
            }
            if (arr[i] === "#") tmp[tmp.length - 1] = tmp[tmp.length - 1] * -1;
          }
        }
        answer = tmp.reduce((acc, cul) => acc + cul);

    return answer;
}