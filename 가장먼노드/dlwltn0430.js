function solution(n, edge) {
   let A = Array.from({ length: n + 1 }, () => [])
   let distance = Array(n + 1).fill(-1)

   edge.forEach(([v1, v2]) => {
      A[v1].push(v2)
      A[v2].push(v1)
   })

   let q = [1]
   distance[1] = 0

   while (q.length > 0) {
      let v = q.shift()

      for (let i = 0; i < A[v].length; i++) {
         if (distance[A[v][i]] === -1) {
            q.push(A[v][i])
            distance[A[v][i]] = distance[v] + 1
         }
      }
   }

   let distant = Math.max(...distance)

   return distance.filter((d) => d === distant).length
}
