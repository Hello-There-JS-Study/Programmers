function solution(routes) {
   let answer = 0
   routes.sort((a, b) => a[1] - b[1])
   let camera = -30001

   for (const route of routes) {
      if (camera < route[0]) {
         answer++
         camera = route[1]
      }
   }

   return answer
}
