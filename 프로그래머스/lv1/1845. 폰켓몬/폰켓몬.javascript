function solution(nums) {
    let newNums = new Set(nums);
    let half = Math.floor(nums.length/2);

    return newNums.size < half ? newNums.size : half;
}
