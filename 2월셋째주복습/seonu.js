// 전력망을 둘로 나누기

function solution(n, wires) {
    var tree = Array.from({length: n+1}, () => [])
    var min = Infinity
    // tree 만들기
    wires.forEach(([v1, v2]) => {
        tree[v1].push(v2)
        tree[v2].push(v1)
    })
    // wires 돌면서 하나씩 끊기
    wires.forEach(([cut1,cut2]) => {
        let visitied = new Array(n+1).fill(0)
        let queue = []
        let group1 = 0

        // 끊긴 wires로 group1, group2로 나누기
        visitied[cut1] = true
        queue.push(cut1)
        group1++
        while(queue.length > 0) {
            let curr =  queue.pop()
            tree[curr].forEach((next) => {
                if (next !== cut2 && !visitied[next]) {
                    visitied[next] = true
                    queue.push(next)
                    group1++
                }
        })
        }
        let group2 = n - group1
        let diff = Math.abs(group1 - group2)
        min = Math.min(diff, min)
        })
    
    return min
    
}

// 피로도

function solution(k, dg) {
    let maxVisited = 0
    let visited = new Array(dg.length + 1).fill(false)

    function dfs(leftK, count) {
        maxVisited = Math.max(maxVisited, count)

        for(let i=0; i<dg.length; i++){
            let minK = dg[i][0]
            let removeK = dg[i][1]
            if(leftK >= minK && !visited[i]) {
                visited[i] = true
                dfs(leftK - removeK, count + 1)
                visited[i] = false
            }
        }
    }

    dfs(k, maxVisited)
    return maxVisited
}
