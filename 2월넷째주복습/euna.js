// 스택/큐 > 기능 개발
function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const result = [];

  let i = 0;
  while (i < days.length) {
    let count = 1;
    let max = days[i];
    while (i + count < days.length && days[i + count] <= max) {
      count++;
    }
    result.push(count);
    i += count;
  }

  return result;
}
