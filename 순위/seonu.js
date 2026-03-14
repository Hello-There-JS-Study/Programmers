function solution(n, results) {
    // a > b, b > c 이면 a > c 임
    // 풀로이드-워셜
    const graph = Array.from({length: n + 1}, () => Array(n+1).fill(false))
    
    for (const [win, lose] of results) {
        graph[win][lose] = true
    }
    
    // 플루이드 워셜 (중간 노드 -> 시작 -> 도착)
    for (let b = 1; b <= n; b++) {
        for (let a = 1; a <= n; a++) {
            for (let c = 1; c <= n; c++) {
                if (graph[a][b] && graph[b][c]) {
                    graph[a][c] = true
                }
            }
        }
    }
    
    let ans = 0
    
    for (let i =1; i <= n; i++) {
        let cnt = 0
        for (let j =1; j <= n; j++) {
            if (graph[i][j] || graph[j][i]) {
                cnt++
            }
        }
        if (cnt === n - 1) ans++
    }
    
    return ans
}
