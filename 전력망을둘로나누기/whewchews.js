/*
 * 1) 입력 크기
 * - n: 2 ~ 100 (송전탑 개수)
 * - wires.length = n - 1: 1 ~ 99 (전선 개수)
 * - 각 wire = [v1, v2], 1 <= v1 < v2 <= n
 * - 그래프는 항상 트리(사이클 없음, 연결됨)
 *
 * 2) 자료구조
 * - 인접 리스트 adj: Array(n+1), adj[u]에 연결된 노드 목록 저장
 * - BFS용 visited: Array(n+1) boolean
 * - BFS용 queue: 배열(큐처럼 사용)
 *
 * 3) 아이디어
 * - 전선(간선) 하나를 끊으면 트리는 정확히 2개의 컴포넌트로 분리됨
 * - 모든 전선(총 n-1개)을 하나씩 끊어보는 완전탐색
 * - 특정 전선 (a,b)를 끊었다고 가정하면:
 *   - a에서 BFS를 돌되, (a<->b) 이동만 막으면 "a가 속한 컴포넌트 크기 size"를 셀 수 있음
 *   - 다른 쪽 크기는 n - size
 *   - 차이 = |size - (n - size)| = |n - 2*size|
 * - 모든 전선에 대해 차이를 계산하고 최소값을 반환
 */
function solution(n, wires) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of wires) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let best = Infinity;

  function bfsCount(start, cutA, cutB) {
    const visited = Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;

    let count = 0;

    while (queue.length) {
      const cur = queue.shift();
      count++;

      for (const next of adj[cur]) {
        if (
          (cur === cutA && next === cutB) ||
          (cur === cutB && next === cutA)
        ) {
          continue;
        }

        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    return count;
  }

  for (const [a, b] of wires) {
    const size = bfsCount(a, a, b);
    const diff = Math.abs(n - 2 * size);

    best = Math.min(best, diff);
  }

  return best;
}
// TC: 전선마다(최대 n-1개) BFS 1번(최대 O(n)) => O((n-1)*n) = O(n^2)
// SC: adj O(n), visited O(n), queue O(n) => O(n)
