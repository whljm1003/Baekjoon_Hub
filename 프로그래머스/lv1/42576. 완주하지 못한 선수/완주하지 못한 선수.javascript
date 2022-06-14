function solution(participant, completion) {
    participant=participant.sort()
    completion=completion.sort()
    
    for(let i = 0 ; i < participant.length ; i++) {
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}


// function solution(participant, completion) {
//     // 효율성에서 떨어짐
//     //completion.map((v) => participant.splice(participant.indexOf(v),1));
//     //return participant[0];

//     // 배열정렬
//     participant=participant.sort()
//     completion=completion.sort()
//     // 반복문으로 두 배열 배교하다가 아니면 그거임;;;
//     for(let a = 0; a < participant.length; a++){
//         if(participant[a] !== completion[a]){
//             return participant[a]
//         }
//     }
//     return participant;
// }