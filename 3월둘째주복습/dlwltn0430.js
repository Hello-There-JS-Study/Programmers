function bfs(map, startX, startY, targetX, targetY) {
   const q = [[startX, startY, 0]]
   const dx = [0, 0, -1, 1]
   const dy = [-1, 1, 0, 0]

   while (q.length > 0) {
      const [x, y, count] = q.shift()
      if (x === targetX && y === targetY) return count / 2

      for (let i = 0; i < 4; i++) {
         const nx = x + dx[i]
         const ny = y + dy[i]

         if (nx >= 0 && nx <= 100 && ny >= 0 && ny <= 100 && map[nx][ny] === 1) {
            q.push([nx, ny, count + 1])
            map[nx][ny] = 5
         }
      }
   }
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
   let map = Array.from({ length: 101 }, () => Array(101).fill(0))

   rectangle.forEach(([x1, y1, x2, y2]) => {
      for (let i = x1 * 2; i <= x2 * 2; i++) {
         for (let j = y1 * 2; j <= y2 * 2; j++) {
            // 내부
            if (i > x1 * 2 && i < x2 * 2 && j > y1 * 2 && j < y2 * 2) {
               map[i][j] = 2
            }
            // 테두리
            else if (map[i][j] != 2) {
               map[i][j] = 1
            }
         }
      }
   })

   return bfs(map, characterX * 2, characterY * 2, itemX * 2, itemY * 2)
}
