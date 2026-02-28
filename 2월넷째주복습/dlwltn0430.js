function solution(maps) {
   const dx = [-1, 1, 0, 0]
   const dy = [0, 0, -1, 1]

   const q = [[0, 0, 1]]
   maps[0][0] = 0

   while (q.length > 0) {
      const [x, y, distance] = q.shift()

      if (x === maps.length - 1 && y === maps[0].length - 1) return distance

      for (let i = 0; i < 4; i++) {
         const nx = x + dx[i]
         const ny = y + dy[i]

         if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length && maps[nx][ny] !== 0) {
            maps[nx][ny] = 0
            q.push([nx, ny, distance + 1])
         }
      }
   }

   return -1
}
