function solution(numbers) {
   const sorted = numbers
      .map((num) => num.toString())
      .sort((a, b) => b + a - (a + b))
      .join('')

   return sorted[0] === '0' ? '0' : sorted
}
