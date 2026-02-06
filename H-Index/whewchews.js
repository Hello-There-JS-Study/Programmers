/**
 * 1. 입력 크기
 * n = citations.length
 * 2. 자료구조
 * 배열
 * 3. 반례
 * citations = [0, 0, 0, 0] -> h-index = 0
 * citations = [100, 200, 300] -> h-index = 3
 * citations = [6, 5, 4, 1, 0] -> h-index = 3
 * 4. 아이디어
 * - 인용 횟수를 내림차순으로 정렬
 * - 정렬된 배열을 순회하면서 h-index 조건을 만족하는 최대 h 값을 찾기
 *
 */
function solution(citations) {
  // SC: O(n)
  // TC: O(n log n)
  const sorted = [...citations].sort((a, b) => b - a);

  // SC: O(1)
  // TC: O(n)
  let h = 0;
  while (h < sorted.length && sorted[h] >= h + 1) h++;

  return h;
}

// SC: O(n)
// TC: O(n log n)
