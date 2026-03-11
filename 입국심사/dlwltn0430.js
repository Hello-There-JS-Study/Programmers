function solution(n, times) {
   let left = 1
   let right = n * Math.max(...times)
   let answer = 0

   while (left <= right) {
      let sum = 0
      let mid = Math.floor((left + right) / 2)

      for (let i = 0; i < times.length; i++) {
         sum += Math.floor(mid / times[i])
      }

      if (sum >= n) {
         right = mid - 1
         answer = mid
      } else {
         left = mid + 1
      }
   }

   return answer
}
