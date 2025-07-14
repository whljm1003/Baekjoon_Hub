function solution(s) {
  let answer = 0;
  const arr = s.split('');

  const matching = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    // 1. 회전
    const target = arr.shift();
    arr.push(target);

    // 2. 스택 검사
    const stack = [];
    let isValid = true;

    for (const bracket of arr) {
      if (['(', '{', '['].includes(bracket)) {
        stack.push(bracket);
      } else {
        if (stack.at(-1) === matching[bracket]) {
          stack.pop();
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}