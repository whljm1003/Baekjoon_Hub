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
};

function solution(s) {
  let result = "";
  let word = "";

  for (const ch of s) {
    if (!isNaN(ch)) {
      result += ch;
    } else {
      word += ch;
      if (alphabet[word]) {
        result += alphabet[word];
        word = "";
      }
    }
  }

  return Number(result);
}
