const find = (parent, v) => {
   if (parent[v] === v) return v
   return find(parent, parent[v])
}

function solution(n, costs) {
   costs.sort((a, b) => a[2] - b[2])

   let parent = []
   let answer = 0
   let bridgeCount = 0

   for (let i = 0; i < n; i++) {
      parent.push(i)
   }

   for (let i = 0; i < costs.length; i++) {
      const v1 = find(parent, costs[i][0])
      const v2 = find(parent, costs[i][1])

      if (bridgeCount === n - 1) break

      if (v1 !== v2) {
         // 다리를 놓았을 때 사이클이 안 생긴다면
         parent[v2] = v1
         answer += costs[i][2]
         bridgeCount++
      }
   }

   return answer
}
