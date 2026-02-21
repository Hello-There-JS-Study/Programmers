function solution(people, limit) {
   let cnt = 0
   people.sort((a, b) => a - b)

   let start = 0
   let end = people.length - 1

   while (start <= end) {
      if (people[start] + people[end] <= limit) {
         start++
         end--
      } else {
         end--
      }
      cnt++
   }

   return cnt
}
