function solution(n, computers) {
   let adjacent = Array.from({ length: n }, () => [])
   let visited = new Array(n).fill(false)
   let group = 0

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         if (i !== j && computers[i][j] === 1) {
            adjacent[i].push(j)
         }
      }
   }

   const dfs = (node) => {
      visited[node] = true

      for (let i = 0; i < adjacent[node].length; i++) {
         if (!visited[adjacent[node][i]]) {
            dfs(adjacent[node][i])
         }
      }
   }

   for (let i = 0; i < n; i++) {
      if (!visited[i]) {
         group++
         dfs(i)
      }
   }

   return group
}
