const alphabet = {  
 zero: "0",
 one: "1",
 two: "2",
 three: "3",
 four: "4",
 five: "5",
 six: "6",
 seven: "7",
 eight: "8",
 nine: "9"
}

function solution(s) {
  let answer = [];
  let word = "";
  
  for(const string of s) {
    !isNaN(Number(string)) ? answer.push(string) :word += string;
    if(alphabet[word]) {
      answer.push(word);
      word = "";
    }
      
  }
  
  for(let i = 0 ; i <= answer.length ; i++) {
    if(alphabet[answer[i]]) answer[i] = alphabet[answer[i]];
  }
    return Number(answer.join(''));
}