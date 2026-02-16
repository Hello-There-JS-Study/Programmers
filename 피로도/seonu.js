function solution(k, dg) {
    let ans = 0
    let cnt = 0
    let len = dg.length
    const visited = new Array(len).fill(0)
    
    function dfs(k, cnt, visited) {
        ans = Math.max(cnt, ans)
        for (let i=0; i < len; i++) {
            if (dg[i][0] <= k && visited[i] == 0) {
                visited[i] = 1
                dfs(k - dg[i][1], cnt + 1, visited)
                visited[i] = 0
            }
        }
        
    }
    
    dfs(k, 0, visited)
    return ans
}
