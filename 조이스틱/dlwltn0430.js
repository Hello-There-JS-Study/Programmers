function solution(name) {
   let upDownMove = 0
   let leftRightMove = name.length - 1

   for (let i = 0; i < name.length; i++) {
      let n = name[i].charCodeAt(0)
      upDownMove += Math.min(n - 65, 26 - (n - 65))

      let rightIndex = i + 1 // i가 leftIndex 역할

      while (rightIndex < name.length && name[rightIndex] === 'A') {
         rightIndex++
      }

      leftRightMove = Math.min(leftRightMove, 2 * i + name.length - rightIndex)
      leftRightMove = Math.min(leftRightMove, 2 * (name.length - rightIndex) + i)
   }

   return upDownMove + leftRightMove
}
