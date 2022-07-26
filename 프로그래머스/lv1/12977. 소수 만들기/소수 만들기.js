function solution(nums) {
    let count = 0;
    let len = nums.length;
    
    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            for(let k = j+1; k < len; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) count++;
            };
        };
    };
    return count;
};


function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return sum > 1;
};