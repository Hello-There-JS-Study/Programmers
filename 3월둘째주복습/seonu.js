function solution(n, times) {
    let low = 1
    let high = Math.max(...times) * n
    
    while (low <= high) {
        let targetTime = Math.floor((low + high) / 2)
        let people = times.reduce((acc, time) => acc + Math.floor(targetTime / time), 0)
        if (people >= n) {
            high = targetTime - 1
        } else {
            low = targetTime + 1
        }
    }
    return low
}
