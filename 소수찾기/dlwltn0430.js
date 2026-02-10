function isPrime(x) {
   if (x <= 1) return false

   for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false
   }

   return true
}

function solution(numbers) {
   const combinations = new Set()

   function dfs(current, remaining) {
      if (current.length > 0) combinations.add(Number(current))

      for (let i = 0; i < remaining.length; i++) {
         dfs(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1))
      }
   }

   dfs('', numbers)

   return [...combinations].filter(isPrime).length
}
