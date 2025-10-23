function solution(N, stages) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    const challenger = stages.filter(stage => stage >= i).length; // 도전자 수
    const failed = stages.filter(stage => stage === i).length; // 실패자 수

    const failure = challenger === 0 ? 0 : failed / challenger;
    result.push({ stage: i, failure });
  }

  // 실패율 내림차순, 같으면 스테이지 오름차순
  result.sort((a, b) => b.failure - a.failure || a.stage - b.stage);
  return result.map(v => v.stage);
}