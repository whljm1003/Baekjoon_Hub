function solution(people, limit) {
    const peopleSort = people.sort((a,b) => a-b);
    let count = 0;

    while(peopleSort.length !== 0) {
      const left = peopleSort[0];
      const right = peopleSort.at(-1);
      if(left + right <= limit) {  
          peopleSort.shift();
          peopleSort.pop();
      }else {
          peopleSort.pop();
      }
      count++;
    }
  return count;
}