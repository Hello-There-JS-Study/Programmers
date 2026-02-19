function solution(number, k) {
   let s = []

   for (let i = 0; i < number.length; i++) {
      const now = number[i]

      while (k > 0 && s.length > 0 && s[s.length - 1] < now) {
         s.pop()
         k--
      }
      s.push(now)
   }

   return s.slice(0, s.length - k).join('')
}
