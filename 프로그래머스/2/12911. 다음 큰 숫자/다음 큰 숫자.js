function solution(n) {
    const originalCount = (n).toString(2).split('1').length - 1;

    function findNext(num) {
      const binary = (num).toString(2)
      const count = binary.split('1').length - 1;

      if(count === originalCount) {
        return num;
      }
      return findNext(num + 1);
    }
    return findNext(n+1)
}