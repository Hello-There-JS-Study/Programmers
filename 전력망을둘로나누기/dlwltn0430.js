function solution(n, wires) {
   let graph = Array.from({ length: n + 1 }, () => [])
   let answer = n

   for (let i = 0; i < wires.length; i++) {
      let [v1, v2] = wires[i]
      graph[v1].push(v2)
      graph[v2].push(v1)
   }

   // v1과 v2 사이의 간선 끊고 v1과 연결된 노드들 개수 세기
   const dfs = (v1, v2, visited) => {
      visited[v1] = true
      let count = 1

      for (let i = 0; i < graph[v1].length; i++) {
         if (!visited[graph[v1][i]] && graph[v1][i] !== v2) {
            visited[graph[v1][i]] = true
            count += dfs(graph[v1][i], v2, visited)
         }
      }

      return count
   }

   for (let i = 0; i < wires.length; i++) {
      let [v1, v2] = wires[i]
      let visited = new Array(n + 1).fill(false)

      let count = dfs(v1, v2, visited)
      let diff = Math.abs(count - (n - count))
      answer = Math.min(answer, diff)
   }

   return answer
}
