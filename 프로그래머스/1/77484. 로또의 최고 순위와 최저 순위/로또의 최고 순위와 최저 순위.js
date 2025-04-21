const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  }

function solution(lottos, win_nums) {  
  let max = 0;
  let min = 0;

  for(let i = 0 ; i<lottos.length ; i++) {
    if(lottos[i] === 0) max += 1;
    else if(win_nums.includes(lottos[i])) {
      max += 1;
      min += 1;
    } 
  }

  return [ranking[max] , ranking[min]];  
}