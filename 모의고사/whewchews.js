/**
 * 1. 입력크기
 * - N = answers.length
 * 2. 자료구조
 * - 2차원 배열
 * 3. 아이디어
 * - 3명의 수포자 각각은 고정된 찍기 패턴을 반복한다.
 * - i번째 문제에서 각 수포자의 답은 pattern[i % pattern.length]
 * - answers를 한 번 순회하면서 3명의 정답 여부를 동시에 카운트한다.
 * - 최댓값(max)을 가진 수포자(동점 포함) 인덱스를 모아 반환한다.
 */
function solution(answers) {
  // SC: O(1) // 23개
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const counts = [0, 0, 0];

  // TC: O(N), 3N * O(1) => O(N)
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    for (let p = 0; p < 3; p++) {
      const pattern = patterns[p];
      if (pattern[i % pattern.length] === a) counts[p]++;
    }
  }

  // TC: O(1)
  const max = counts.reduce((m, v) => (v > m ? v : m), -Infinity);
  // TC: O(1)
  // SC: O(1)
  const res = [];
  for (let i = 0; i < 3; i++) if (counts[i] === max) res.push(i + 1);
  return res;
}
// SC: O(1)
// TC: O(N)
