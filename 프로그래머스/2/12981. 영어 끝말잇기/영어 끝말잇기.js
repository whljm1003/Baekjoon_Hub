function solution(n, words) {
  const  answer = [0, 0];
  const countMap = new Map();
  let preWord = "";

  for (const [index, word] of words.entries()) {
    const target = (index + 1) % n;
    const order = target === 0 ? n : target;

      if(preWord.length > 0 && preWord.at(-1) !== word.at(0)) {
        answer[0]= order;
        answer[1] =(countMap.get(order) || 0) + 1;
        break;
      } else if(words.findIndex(e => e === word) < index) {
        answer[0]= order;
        answer[1] =(countMap.get(order) || 0) + 1;
        break;
      }else {
        countMap.set(order, (countMap.get(order) || 0) + 1);  
        preWord = word;
      }
  }

  return answer;
}