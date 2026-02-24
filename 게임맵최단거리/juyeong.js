function solution(maps) {
  var answer = -1;
  var dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));;
  const queue = [[1, 0, 0]];
  visited[0][0] = true;
  let head = 0;
  while (head < queue.length) {
    const [cur_step, cur_r, cur_c] = queue[head++];
    if (cur_r === n - 1 && cur_c === m - 1) {
      answer = cur_step;
      break;
    }
    for (let [dr, dc] of dir) {
      const [next_r, next_c] = [cur_r + dr, cur_c + dc];
      if ((0 <= next_r && next_r < n) && (0 <= next_c && next_c < m)) {
        if (visited[next_r][next_c] === false && maps[next_r][next_c] === 1) {
          visited[next_r][next_c] = true;
          queue.push([cur_step + 1, next_r, next_c]);
        }
      }
    }
  }
  return answer;
}
