/*
 * 1. 입력크기
 * - N = dungeons.length [min, value], 1~8, min>=value (1~1000)
 * - K (1~5000)
 * 2. 자료구조
 * - 백트랙킹/DFS
 * 3. 아이디어
 * - 매 순간 아직 안 간 던전 중에서
 *   1) 현재 피로도가 최소 필요 피로도 이상이면 들어가고
 *   2) 들어간 뒤 피로도를 소모만큼 깎고
 *   3) 계속 다음 던전을 시도한다.
 * - 한 번 어떤 던전을 선택해 들어가본 뒤에는
 *   다시 돌아와서 다른 던전 선택도 해본다.
 */

function solution(k, dungeons) {
  const n = dungeons.length;
  let visited = Array(n).fill(0);
  let result = 0;

  function dfs(fatigue, count) {
    if (count > result) result = count;

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      const minNeed = dungeons[i][0];
      const cost = dungeons[i][1];

      if (fatigue >= minNeed) {
        visited[i] = 1;

        dfs(fatigue - cost, count + 1);

        visited[i] = 0;
      }
    }
  }

  dfs(k, 0);

  return result;
}
// SC: O(N)
// TC: O(N!)
