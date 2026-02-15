// 해시 > 완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}

// 해시 > 의상
function solution(clothes) {
  const map = new Map();
  clothes.forEach(([name, kind]) => {
    map.set(kind, (map.get(kind) || 0) + 1);
  });

  let answer = 1;
  for (const count of map.values()) {
    answer *= count + 1;
  }

  return answer - 1;
}
