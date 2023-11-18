// 2중 배열 
// photo[i][j]가 nmae 포함되면, name의 index를 뽑아서 yearing의 값으로 환산
// 환산된 값들을 저장
// result 형태는 [15,15,15] 이런식으로 표현

function solution(name, yearning, photo) {
    const answer = [];
    
    for(let i = 0 ; i < photo.length ; i ++) {
        const selectedPhoto = photo[i]
        let sum = 0
        for(let j = 0 ; j < selectedPhoto.length ; j++) {   
           const person = selectedPhoto[j];
           const personIndex = name.indexOf(person);
            if(personIndex !== -1) sum += yearning[personIndex]
        }
        answer.push(sum)
    }
    return answer;
}


