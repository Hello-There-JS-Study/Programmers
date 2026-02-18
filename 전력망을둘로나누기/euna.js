function solution(n, wires) {
  let answer = Infinity;
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  for (const [cut1, cut2] of wires) {
    const visited = new Array(n + 1).fill(false);
    const stack = [cut1];
    visited[cut1] = true;
    let count = 0;

    while (stack.length > 0) {
      const node = stack.pop();
      count++;
      for (const next of graph[node]) {
        if (visited[next]) continue;
        if ((node === cut1 && next === cut2) || (node === cut2 && next === cut1)) continue;
        visited[next] = true;
        stack.push(next);
      }
    }
    answer = Math.min(answer, Math.abs(n - 2 * count));
  }
  return answer;
}
