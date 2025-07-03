function solution(citations) {
    citations.sort((a, b) => a - b);
    const n = citations.length;

    for (let i = 0; i <= n; i++) {
        const target = citations.findIndex(el => el >= i);
        const count = target === -1 ? 0 : n - target;

        if (count >= i) {
            answer = i;
        }
    }

    return answer;
}