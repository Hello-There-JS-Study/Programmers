/*
 * 1. 입력 크기
 * - N = numbers.length
 * - 각 숫자마다 + / - 선택 => 경우의 수 2^N
 *
 * 2. 자료구조
 * - 재귀(DFS) 호출 스택(최대 깊이 N)
 * - 누적합(sum), 인덱스(i)만 사용
 *
 * 3. 아이디어
 * - dfs(i, sum): i번째 숫자까지 선택했을 때(0..i-1) 만든 누적합이 sum인 상태
 * - i번째 숫자에 대해:
 *   1) 더하는 경우: dfs(i+1, sum + numbers[i])
 *   2) 빼는 경우: dfs(i+1, sum - numbers[i])
 * - i === N(모든 숫자를 다 썼을 때) sum === target이면 answer++
 */
function solution(numbers, target) {
  let answer = 0;
  const N = numbers.length;

  function dfs(i, sum) {
    if (i === N) {
      if (sum === target) answer++;
      return;
    }
    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  }

  dfs(0, 0);
  return answer;
}
// TC: O(2^N) (모든 부호 조합 탐색
// SC: O(N) (재귀 콜스택)
