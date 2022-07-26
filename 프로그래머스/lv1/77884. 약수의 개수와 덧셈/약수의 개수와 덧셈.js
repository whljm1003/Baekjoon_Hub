function solution(left, right) {
    let even = 0;
    let odd = 0;
    for(let i=left ; i<=right ; i++) {
        let count = 0;
        for(let k=1 ; k<=i ; k++) {
              i % k === 0 ? count++ : undefined;
            }
        count % 2 === 0 ? even+=i : odd+=i;
  }
    return even-odd;
}