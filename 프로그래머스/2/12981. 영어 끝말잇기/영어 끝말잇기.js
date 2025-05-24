function solution(n, words) {
  const usedWords = new Set();
  let prevWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if (usedWords.has(word) || (prevWord && prevWord.at(-1) !== word[0])) {
      return [player, turn];
    }

    usedWords.add(word);
    prevWord = word;
  }

  return [0, 0];
}