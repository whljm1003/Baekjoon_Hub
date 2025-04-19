function solution(n, lost, reserve) {

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 1. 자기 자신이 여벌도 있고 도난도 당한 경우 제거
  const realLost = lost.filter(l => !reserve.includes(l));
  let realReserve = reserve.filter(r => !lost.includes(r));

  let answer = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    const loster = realLost[i];

    // 앞 번호에게 빌릴 수 있는지
    if (realReserve.includes(loster - 1)) {
      realReserve = realReserve.filter(r => r !== loster - 1);
      answer++;
    }
    // 뒷 번호에게 빌릴 수 있는지
    else if (realReserve.includes(loster + 1)) {
      realReserve = realReserve.filter(r => r !== loster + 1);
      answer++;
    }
  }

  return answer;
}
