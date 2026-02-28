function solution(word) {
    var list = ['A', 'E', 'I', 'O', 'U']
    var ans = 0
    var found = false
    
    function dfs (str) {
        if (found) return
        if (str.length > 5) return
        // 종료 조건
        if(str.length > 0) {
            ans++
            if(str === word) {
                found = true
                return 
            }
        }
        // 차례로 넣기
        for (let i=0; i < 5; i++) {
            dfs(str + list[i])
        } 
    }
    dfs('')
    return ans     
}

