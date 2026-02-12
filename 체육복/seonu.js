function solution(n, lost, reserve) {
    var cnt = 0
    
    var have = [...Array(n)].map((_,i) => {
            idx = i + 1
            isLost = lost.includes(idx)
            isReserve = reserve.includes(idx)
            
        if (isLost) {
            if (isReserve) return 1
            else return 0
        } else {
            if (isReserve) return 2
            else return 1
        }
    })
    
    console.log("=== before ===", have)
    
    for (let i=0; i< have.length; i++) {
        if (have[i] == 0) {
            // 바로 이전 탐색
            if(i - 1 > 0) {
                if (have[i-1] == 2) {
                    have[i-1] -= 1
                    have[i] += 1 
                }
            } 
            // 바로 직후 탐색
            if (i + 1 < have.length) {
                if (have[i+1] ==2) {
                    have[i+1] -= 1
                    have[i] += 1
                }
            }
        }
    }
    
    console.log("=== after ===", have)
    
    have.forEach(el => {if(el > 0) cnt += 1})
    
    return cnt
}
