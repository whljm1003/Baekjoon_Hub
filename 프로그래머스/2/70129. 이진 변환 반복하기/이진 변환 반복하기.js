function solution(s) {
  	let zeroSum = 0;
    function binaryTransform(num,index) {
      if(num === "1")  {
        return [index, zeroSum];
      }
      const ones = num.replaceAll("0",'');
      zeroSum += num.length - ones.length;
      const next = ones.length.toString(2);
      return binaryTransform(next, index + 1);
    }
    return binaryTransform(s, 0);
}