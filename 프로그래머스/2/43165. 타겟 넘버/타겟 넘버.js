function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        if(index === numbers.length) {
            if(sum === target) count+=1;    
            return;
        }
        
        dfs(index + 1, sum + (numbers[index] * -1));
        dfs(index + 1, sum + (numbers[index] * +1));
    }
    
    dfs(0, 0);
    
    return count;
}