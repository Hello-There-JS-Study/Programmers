function solution(n, lost, reserve) {
  // 1) 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 2) 교집합 제거 (도난+여벌인 학생은 남에게 못 빌려줌)
  const realLost = [];
  const realReserve = new Set(reserve);

  for (const x of lost) {
    if (realReserve.has(x)) {
      realReserve.delete(x); // 본인이 입는 용도로 소진
    } else {
      realLost.push(x);
    }
  }

  // 3) 빌려주기 (왼쪽 우선)
  let cannot = 0;

  for (const x of realLost) {
    if (realReserve.has(x - 1)) {
      realReserve.delete(x - 1);
    } else if (realReserve.has(x + 1)) {
      realReserve.delete(x + 1);
    } else {
      cannot++;
    }
  }

  return n - cannot;
}
