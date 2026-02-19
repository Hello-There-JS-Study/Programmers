function solution(word) {
    let dict = ['A', 'E', 'I', 'O', 'U']
    let ans = 0
    let found = false
    let cnt = 0
    
    function dfs (str) {
        if (found) return
        
        if (str == word) {
            ans = cnt
            found = true
            return
        }
        
        if (str.length >= 5) return
        
        for (let i=0; i< 5; i++) {
            cnt++
            dfs(str + dict[i])
        }
    }
    
    dfs('')
    return ans
}
