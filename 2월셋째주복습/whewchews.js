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
