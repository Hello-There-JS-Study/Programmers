/*
 * 1) 아이디어(그리디)
 * - 학생별 기본 1벌에서 시작
 * - lost면 -1, reserve면 +1 반영
 *   (lost와 reserve가 겹치는 학생은 -1과 +1이 상쇄되어 1벌만 남아 대여 불가 상태가 자연 반영)
 * - 1번부터 순회하며 0벌이면 이웃에게 빌림(왼쪽 우선, 없으면 오른쪽)
 * - 마지막에 1벌 이상 학생 수 count
 *
 * 2) 자료구조
 * - clothes 배열: 학생별 체육복 개수 저장 (경계 처리를 위해 n+2)
 *
 * 3) 복잡도
 * - TC: O(L + R + N) => (L,R ≤ N) 이므로 O(N)
 * - SC: O(N)
 */
function solution(n, lost, reserve) {
  const clothes = Array(n + 2).fill(1); // SC: O(N)

  for (const x of lost) clothes[x]--; // O(L)
  for (const x of reserve) clothes[x]++; // O(R)

  for (let i = 1; i <= n; i++) {
    // O(N)
    if (clothes[i] === 0) {
      if (clothes[i - 1] === 2) {
        clothes[i - 1]--;
        clothes[i]++;
      } else if (clothes[i + 1] === 2) {
        clothes[i + 1]--;
        clothes[i]++;
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    // O(N)
    if (clothes[i] >= 1) count++;
  }
  return count;
}
// TC: O(N)
// SC: O(N)
