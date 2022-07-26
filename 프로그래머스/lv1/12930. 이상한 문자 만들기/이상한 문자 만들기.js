function solution(s) {
    let answer = [];
    let arr = s.split(' ');
    for(let i = 0 ; i < arr.length ; i++) {
        let Str = arr[i].split('');
        for(let j = 0 ; j < Str.length ; j++ ) {
            if(j % 2 === 0) {
                Str[j] = Str[j].toUpperCase();
            } else {
                Str[j] = Str[j].toLowerCase(); 
            }
        };
      answer.push(Str.join(''));
    };
return answer.join(' ');
};