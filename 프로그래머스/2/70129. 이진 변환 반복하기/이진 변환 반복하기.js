function solution(s) {
  	let zeroSum = 0;
    function def(num,index) {
      if(num === "1")  {
        return [index, zeroSum];
      }
      const onlyOne = num.replaceAll(0,'');
      zeroSum += num.length - onlyOne.length;
      const conversion = onlyOne.length.toString(2);
      return def(conversion, index + 1);
    }
    return def(s, 0);
}