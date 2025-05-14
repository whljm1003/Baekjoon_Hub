// headgear = 2 + 1(입지 않는 경우) = 3 
// eyewear = 1 + 1(입지 않는 경우) = 2
// 3 * 2 - 1(아무것도 안 입지 않을 경우 제외)
function solution(clothes) {
  const clothesMap = new Map();
  let answer = 1;
  
  for(const [name, type] of clothes) {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  }  
  for(const count of clothesMap.values()) {
    answer *= (count + 1);
  }
  
  return answer - 1;
}