function solution(progresses, speeds) {
        var answer = [];
        let num = 0;
        for (let i = 0; i < progresses.length; i++) {
          let target = Math.ceil((100 - progresses[i]) / speeds[i]);
          if (target > num) {
            num = target;
            answer.push(1);
          } else {
            answer[answer.length - 1]++;
          }
        }
        return answer;
      }