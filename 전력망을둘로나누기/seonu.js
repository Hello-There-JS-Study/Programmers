function solution(n, wires) {
    let minCnt = Infinity

    // tree 만들기
    const tree = Array.from({ length: n + 1 }, () => [])
    wires.forEach(([v1, v2]) => {
        tree[v1].push(v2)
        tree[v2].push(v1)
    });

    // 전선 하나씩 끊기
    for (let i = 0; i < wires.length; i++) {

        const copy = tree.map(arr => [...arr])
        let [v1, v2] = wires[i]
        // 전선 끊기
        copy[v1] = copy[v1].filter(v => v !== v2)
        copy[v2] = copy[v2].filter(v => v !== v1)

        let visited = new Array(n + 1).fill(false)
        let queue = [v1]
        visited[v1] = true
        let group1 = 1

        // bfs
        while (queue.length) {
            let node = queue.shift();

            for (let next of copy[node]) {
                if (!visited[next]) {
                    visited[next] = true
                    queue.push(next)
                    group1++
                }
            }
        }

        let group2 = n - group1
        minCnt = Math.min(minCnt, Math.abs(group1 - group2))
    }

    return minCnt
}

