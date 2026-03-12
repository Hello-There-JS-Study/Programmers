function solution(n, edge) {
    var graph = Array.from({length: n+1}, () => [])
    var visited = new Array(n+1).fill(false)
    var queue = []
    var dist = new Array(n+1).fill(0)
    
    for (const ed of edge) {
        graph[ed[0]].push(ed[1])
        graph[ed[1]].push(ed[0])
    }
    
    queue.push(1)
    visited[1] = true
    
    while (queue.length > 0) {
        let curr = queue.shift()
        for (let next of graph[curr]) {
            if (!visited[next]) {
                visited[next] = true
                dist[next] = dist[curr] + 1
                queue.push(next)
            }
        }
    }
    
    let max = Math.max(...dist)
    
    return dist.filter(v => v === max).length

}
