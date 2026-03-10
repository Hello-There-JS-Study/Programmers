function solution(tickets) {
    let answer = []
    let visited = new Array(tickets.length).fill(false)
    
    tickets.sort((a,b) => a[1].localeCompare(b[1]))
    
    function dfs(cur, path, count) {
        path.push(cur)
        
        if (count === tickets.length) {
            answer = path
            return true
        }
        
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === cur) {
                visited[i] = true
                
                if (dfs(tickets[i][1], [...path], count + 1)) return true
                
                visited[i] = false
            }
        }
        
        return false
    }
    
    dfs("ICN", [], 0)
    
    return answer
}
