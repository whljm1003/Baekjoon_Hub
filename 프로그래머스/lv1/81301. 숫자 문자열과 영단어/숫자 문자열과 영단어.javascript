// function solution(s) {
//     let answer = s;
//     let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
//     for(let i = 0 ; i < str.length ; i++) {
//         if(s.includes(str[i])) {
//             answer = answer.replace(str[i], i);
//         }    
//     }
//     return Number(answer);
// }


function solution(s) {
    let alphabet = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"]
    let num = [1,2,3,4,5,6,7,8,9,0]
    while(isNaN(s)){
        for(let i = 0; i<alphabet.length;i++){
            s = s.replace(alphabet[i],num[i])
        }
    }
    var answer = Number(s);
    console.log(answer)
    return answer;
}