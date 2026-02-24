function solution(maps) {
  /*
   * 1) 입력 크기
   * - n = maps.length (1~100)
   * - m = maps[0].length (1~100)
   * - 총 칸 수 <= 10,000
   *
   * 2) 자료구조
   * - BFS 큐: Array + head 포인터 (shift() 쓰면 O(N)이라 비효율)
   * - 거리/방문 배열 dist[n][m] (초기값 -1)
   *
   * 3) 아이디어
   * - 시작 (0,0)에서 BFS로 이동 가능한 칸(=1)만 확장
   * - dist[x][y] = 시작부터 (x,y)까지 지나온 칸 수
   * - 처음 도착한 (n-1,m-1)의 dist가 최단거리
   * - 끝까지 못 가면 dist가 -1이므로 -1 반환
   */

  const n = maps.length;
  const m = maps[0].length;

  if (maps[0][0] === 0 || maps[n - 1][m - 1] === 0) return -1;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));
  dist[0][0] = 1;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [[0, 0]];
  let head = 0;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    if (x === n - 1 && y === m - 1) return dist[x][y];

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // 범위 밖
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      // 벽
      if (maps[nx][ny] === 0) continue;
      // 이미 방문
      if (dist[nx][ny] !== -1) continue;

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return -1;
}
// TC: O(n*m)
// SC: O(n*m) (dist + queue)
