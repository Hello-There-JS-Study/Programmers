function isPrime(n) {
  // 0, 1은 소수가 아님
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // i*i <= n (sqrt까지만 검사)
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  /*
  입력 크기:
    N = numbers.length (1~7)

  자료구조:
    - digits: 문자열을 문자 배열로
    - used: 길이 N boolean (각 종이 조각 사용 여부)
    - candidates: Set<number> (만들 수 있는 숫자 중복 제거)

  아이디어:
    - DFS로 길이 1~N까지 모든 순열을 생성
    - 매 단계에서 현재 문자열이 비어있지 않으면 Number로 변환해 Set에 추가
    - DFS 완료 후 Set을 순회하며 소수 개수 카운트

  주의/반례:
    - "011": "01" -> 1 처럼 leading zero는 Number로 처리되며 중복은 Set이 제거
    - "0", "1"만 만들면 소수 0개
    - 같은 숫자 조각이 여러 개면 같은 값이 여러 경로로 생성되므로 중복 제거 필수
  */

  const digits = numbers.split("");
  const N = digits.length;
  const used = Array(N).fill(false);
  const candidates = new Set();

  function dfs(curStr) {
    if (curStr.length > 0) {
      candidates.add(Number(curStr));
    }
    if (curStr.length === N) return;

    // 같은 depth에서 동일한 digit을 여러 번 선택하는 중복 경로를 줄이기
    const tried = new Set();

    for (let i = 0; i < N; i++) {
      if (used[i]) continue;
      if (tried.has(digits[i])) continue;
      tried.add(digits[i]);

      used[i] = true;
      dfs(curStr + digits[i]);
      used[i] = false;
    }
  }

  dfs("");

  let count = 0;
  for (const num of candidates) {
    if (isPrime(num)) count++;
  }
  return count;

  /**
   * TC: O(U * √M)
   * - U: 만들 수 있는 서로 다른 숫자 개수(최대 약 13,699)
   * - M: 만들 수 있는 최대 수(최대 9,999,999)
   * SC: O(U) (Set) + O(N)(used) → O(U)
   */
}
