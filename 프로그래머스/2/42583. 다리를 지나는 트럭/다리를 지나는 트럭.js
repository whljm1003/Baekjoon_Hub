function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const truck = [...truck_weights];
    let driving = [];
    

    while(truck.length !== 0 || driving.length !== 0) {
      time++;
      
      // 현재 다리를 건너고 있는 트럭의 시간 증가
      driving = driving.map(t => ({...t, time: t.time + 1}));
      
      //다리를 다 지난 트럭 제거
      if(driving.length > 0 && driving[0].time > bridge_length) {
        driving.shift();
      }
      
      // 다음 트럭이 올라갈 수 있는 확인
      const totalWeight = driving.reduce((acc, cur) => acc + cur.truckWeight, 0);
      if(truck.length > 0 && totalWeight + truck[0] <= weight) {
        driving.push({truckWeight : truck.shift(), time : 1});
      }
    }
    return time;
}