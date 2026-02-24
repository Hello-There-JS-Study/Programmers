function solution(maps) {
    var pos = [[0,1], [0,-1], [1,0], [-1,0]]
    var queue = []
    var n = maps.length
    var m = maps[0].length
    var visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false))
    
    queue.push([0,0])
    visited[0][0] = true
    
    while (queue.length > 0) {
        let curr = queue.shift()
        for(const p of pos) {
            let x = curr[1] + p[1]
            let y = curr[0] + p[0]
            if (y < maps.length && y > -1 && x < maps[0].length && x > -1) {
                if (!visited[y][x] && maps[y][x] == 1) {
                    maps[y][x] = maps[curr[0]][curr[1]] + 1
                    visited[y][x] = true
                    queue.push([y,x])   
                }
            }
        }
    }

    return maps[n - 1][m - 1] == 1 ? -1 : maps[n - 1][m - 1]
}
