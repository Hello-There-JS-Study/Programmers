function solution(numbers, target) {
    var cnt = 0;
    
    function dfs(sum, idx) {
        if (idx == numbers.length - 1) {
            if (sum == target) cnt++
            return
        }    
        dfs(sum + numbers[idx+1], idx+1)
        dfs(sum - numbers[idx+1], idx+1)
    }
    
    dfs(numbers[0] * (-1), 0)
    dfs(numbers[0] * 1, 0)
    
    return cnt;
}
