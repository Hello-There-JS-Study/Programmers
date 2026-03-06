function solution(begin, target, words) {
   const q = [[begin, 0]]
   const visited = new Array(words.length).fill(false)
   let answer = 0

   if (!words.includes(target)) return 0

   while (q.length > 0) {
      const [word, count] = q.shift()

      if (word === target) return count

      for (let i = 0; i < words.length; i++) {
         if (!visited[i] && canConvert(word, words[i])) {
            q.push([words[i], count + 1])
            visited[i] = true
         }
      }
   }
}

const canConvert = (word1, word2) => {
   let count = 0

   for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) count++
   }

   return count === 1 ? true : false
}
