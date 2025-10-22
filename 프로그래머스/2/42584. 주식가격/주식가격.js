function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = []; // 인덱스 저장

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack.at(-1)]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  // 끝까지 안 떨어진 경우 처리
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}