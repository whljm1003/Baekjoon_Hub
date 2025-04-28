function solution(phone_book) {
  const phoneSet = new Set(phone_book);

  for(const numbers of phone_book) {
    let prefix = '';
    for(let i = 0 ; i < numbers.length -1 ; i++) {
      prefix += numbers[i];
      if(phoneSet.has(prefix)) {
        return false;
      }
    }
  }
  
  return true;
}