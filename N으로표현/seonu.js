function solution(N, number) {
    // dp[i] = i 개의 숫자로 만들 수 있는 수들의 집합
    // dp[i] = set()
    // bfs로 풀어도 되나, 경로를 기억할 필요없이 결과만 기억하면 되니깐
    
    // 초기값
    // 점화식
    if (N == number) return 1
    var answer = 0;
    dp = Array.from({length: 10}, () => new Set())
    dp[1].add(N)
    
    for(let i=2; i < 10; i++) {
        // NN...N 더해주기
        dp[i].add(Number(String(N).repeat(i)))
        // 사칙연산해주기
        // i를 둘로 쪼개주기
        for(let j=1; j < i; j++) {
            for(const a of dp[j]) {
                for(const b of dp[i-j]) {
                    let max = Math.max(a, b)
                    let min = Math.min(a, b)  
                    dp[i].add(max + min)
                    dp[i].add(max - min)
                    dp[i].add(max * min)
                    if(Number.isInteger(max / min)) {
                        dp[i].add(max / min)
                    }
                }
            }
        }
        // 종료 조건 
        if(dp[i].has(number)) return i
    }
    return -1
    
}
