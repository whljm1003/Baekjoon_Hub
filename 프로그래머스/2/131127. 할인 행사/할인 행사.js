function solution(want, number, discount) {
  let answer = 0;
  const totalLength = number.reduce((acc, num) => acc+num, 0);
  const arrayLength = discount.length-totalLength + 1;
  
  for(let i = 0 ; i < arrayLength ; i++) {
    const discountSlice = discount.slice(i, totalLength + i);
    
    for(let j = 0 ; j < want.length ; j++) {
      const productCount = discountSlice.filter((item) => item === want[j]);
      if(productCount.length < number[j]) {
        break;
      } 
      if(j === want.length - 1){
        answer++;
      }
    }
  }
    return answer;
}