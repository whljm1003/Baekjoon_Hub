function solution(order) {
    const stack = [];
    let answer = 0;
    let current = 1; 
    let idx = 0;     

    while (current <= order.length) {
        if (order[idx] === current) {
            answer++;
            idx++;
            current++;
        } else if (stack.length > 0 && stack.at(-1) === order[idx]) {
            stack.pop();
            answer++;
            idx++;
        } else {
            stack.push(current);
            current++;
        }
    }

    while (stack.length > 0 && stack.at(-1) === order[idx]) {
        stack.pop();
        answer++;
        idx++;
    }

    return answer;
}