function solution(n, computers) {
    var graph = Array.from({length: n}, () => [])
    var visited = new Array(n).fill(false)
    var queue = []
    var group = 0
    
    // graph 만들기
    computers.forEach((v,i) => {
        v.forEach((ele,idx) => {
            if (ele === 1 && i !== idx) {
                graph[i].push(idx)
            }
        })
    })
    
    // dfs 돌리기
    for(let i=0; i < n; i++) {
        if(!visited[i]) {
            group += 1
            visited[i] == true
            queue.push(i)
        }
        
        while (queue.length > 0) {
            var curr = queue.pop()
            for(const next of graph[curr]) {
                if (!visited[next]) {
                    visited[next] = true
                    queue.push(next)
                }
            }
        }
    }
    return group
}
