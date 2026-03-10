function solution(tickets) {
   let answer = ['ICN']
   let visited = Array(tickets.length).fill(false)

   tickets.sort()

   const dfs = (target, count) => {
      if (count === tickets.length) return true

      for (let i = 0; i < tickets.length; i++) {
         if (!visited[i] && tickets[i][0] === target) {
            answer.push(tickets[i][1])
            visited[i] = true

            if (dfs(tickets[i][1], count + 1)) return true

            answer.pop()
            visited[i] = false
         }
      }

      return false
   }

   dfs('ICN', 0)

   return answer
}
