/**
 * 1. 입력크기
 * - n: 1~200
 * - computers: n x n 인접행렬 (0/1)
 * 2. 자료구조
 * - visited[i]: i번 컴퓨터가 어떤 네트워크(BFS/DFS)에서든 방문되었는지
 * 3. 아이디어 (BFS/DFS)
 * - 모든 컴퓨터를 순회하면서, 방문하지 않은 컴퓨터를 만나면 네트워크 하나 발견!
 *  -> count++
 * - 그 컴퓨터에서 BFS/DFS 시작해서 연결된 모든 컴퓨터 방문 처리
 * - BFS/DFS는 큐/스택으로 구현 가능. 여기선 큐로 BFS 구현.
 */
function solution(n, computers) {
  const visited = new Array(n).fill(false);

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    count++;

    const queue = [i];
    let head = 0;
    visited[i] = true;

    while (head < queue.length) {
      const cur = queue[head++];

      for (let j = 0; j < n; j++) {
        if (!visited[j] && computers[cur][j] === 1) {
          visited[j] = true;
          queue.push(j);
        }
      }
    }
  }

  return count;
}

// TC: O(n^2)
// SC: O(n)
