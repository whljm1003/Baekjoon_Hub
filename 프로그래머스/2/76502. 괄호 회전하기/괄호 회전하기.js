function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) count++;
  }

  return count;
}

const pairs = { "(": ")", "[": "]", "{": "}" };

function isValid(s) {
  const stack = [];
  for (const ch of s) {
    if (pairs[ch]) stack.push(ch);
    else if (stack.length === 0 || pairs[stack.pop()] !== ch) return false;
  }
  return stack.length === 0;
}