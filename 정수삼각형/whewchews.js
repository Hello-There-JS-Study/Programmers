/**
 * 1. 입력 크기
 * - 삼각형 높이 h: 1 <= h <= 500
 * - 총 원소 개수 N = h*(h+1)/2 <= 500*501/2 = 125,250
 * - 각 값: 0 ~ 9,999 (누적합은 int 범위 충분)
 *
 * 2. 자료구조
 * - 1차원 DP 배열 dp (길이 h)
 *   dp[j] = "현재 행(i)에서 j열까지 내려왔을 때의 최대 누적합"
 *
 * 3. 아이디어(동적 계획법, DP)
 * - 각 칸 (i, j)에 도달하는 경로는 위에서 2가지뿐:
 *   1) (i-1, j-1) -> (i, j)  (왼쪽 위에서 내려옴)
 *   2) (i-1, j)   -> (i, j)  (오른쪽 위에서 내려옴)
 * - 따라서 점화식:
 *   dpNew[j] = max(dpOld[j-1], dpOld[j]) + triangle[i][j]
 * - 2D dp 대신 1D dp를 쓰면 메모리 O(h).
 * - 단, 같은 dp 배열을 덮어쓰므로 "오른쪽 -> 왼쪽" 순서로 갱신해야
 *   dp[j]가 아직 이전 행(dpOld[j]) 값을 유지한 상태에서 참조 가능.
 */

function solution(triangle) {
  const h = triangle.length;

  const dp = new Array(h).fill(-Infinity);
  dp[0] = triangle[0][0];

  for (let i = 1; i < h; i++) {
    for (let j = i; j >= 0; j--) {
      const fromLeftUp = j - 1 >= 0 ? dp[j - 1] : -Infinity; // dpOld[j-1]
      const fromRightUp = j <= i - 1 ? dp[j] : -Infinity; // dpOld[j]
      dp[j] = Math.max(fromLeftUp, fromRightUp) + triangle[i][j];
    }
  }

  return Math.max(...dp);
}
// TC: O(N)
// SC: O(h)
