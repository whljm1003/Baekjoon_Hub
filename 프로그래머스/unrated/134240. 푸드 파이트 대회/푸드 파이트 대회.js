function solution(foods) {
    let answer = '';
    let left = '', right = '';
  
    for(let i = 1 ; i < foods.length ; i++) {
        let target = 0;
        
        foods[i] % 2 === 0 ? target = foods[i] : target = foods[i]-1;
          let count = target / 2;
          while(count !== 0) {
            left += i;
            right = i + right;
            count--;
            }
          }
  
    answer = left + 0 + right;
    return answer;
}

