function solution(word) {
   let answer = 0
   let count = 0
   const vowels = ['A', 'E', 'I', 'O', 'U']

   const dfs = (current) => {
      if (current === word) {
         answer = count
         return
      }

      if (current.length === 5) return

      for (let i = 0; i < 5; i++) {
         count++
         dfs(current + vowels[i])
      }
   }

   dfs('')

   return answer
}
