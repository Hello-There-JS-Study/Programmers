// 문제: 모의고사

function solution(answers) {
   let count = [0, 0, 0]
   const one = [1, 2, 3, 4, 5]
   const two = [2, 1, 2, 3, 2, 4, 2, 5]
   const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

   for (let i = 0; i < answers.length; i++) {
      if (one[i % 5] === answers[i % answers.length]) count[0]++
      if (two[i % 8] === answers[i % answers.length]) count[1]++
      if (three[i % 10] === answers[i % answers.length]) count[2]++
   }

   const maxValue = Math.max(...count)

   const answer = count.reduce((acc, val, i) => {
      if (val === maxValue) acc.push(i + 1)
      return acc
   }, [])

   return answer
}
