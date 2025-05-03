// 1. 전체 타일수 확인.
// 2. w * h = 전체 타일 수인 경우 조회.
// 3. (w-2) * (h-2) = yellow 일치 여부 확인.
// 4. 일치한다면 w,h 리턴.

function solution(brown, yellow) {
    const answer = [];
    
    const totalCount = brown + yellow;
    
    function dfs(index) {
        const width = totalCount/index;
        const height = index;
        if((width - 2) * (height - 2) === yellow) {
            answer.push(width, height);
            return;
        }
        dfs(index+1);   
    }
    dfs(1);
    return answer;
}