function solution(brown, yellow) {
    var x // 가로
    var y // 세로
    // x + y = brown / 2 + 2
    // x * y = brown + yellow
    
    var sum = brown / 2 + 2   // x + y
    var prod = brown + yellow // x * y
    
    x = brown / 2 + 2 - y 
    
    for (i= Math.ceil(sum/2); i > 0; i--) {
        if (i * (sum - i) == prod) return i > sum - i ? [i, sum - i] : [sum - i, i]
    }
}
