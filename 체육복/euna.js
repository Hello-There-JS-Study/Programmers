function solution(n, lost, reserve) {
  const reserveSet = new Set(reserve);
  const realLost = [];

  for (const student of lost) {
    if (reserveSet.has(student)) {
      reserveSet.delete(student);
    } else {
      realLost.push(student);
    }
  }

  let answer = n - realLost.length;
  realLost.sort((a, b) => a - b);

  for (const student of realLost) {
    if (reserveSet.has(student - 1)) {
      reserveSet.delete(student - 1);
      answer++;
    } else if (reserveSet.has(student + 1)) {
      reserveSet.delete(student + 1);
      answer++;
    }
  }

  return answer;
}
