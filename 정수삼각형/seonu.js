// 정답 맞췄으나 효율성 통과 못한 코드
function solution(triangle) {
    //     0
    //    0 1
    //   0 1 2
    //  0 1 2 3
   var dp = triangle.map((row) => [...row])
   
   for(i=triangle.length-2; i >= 0; i--) {
       let res = []
       for(j=0; j< triangle[i].length; j++) {
           d[i][j] = Math.max(dp[i+1][j] + dp[i][j], dp[i+1][j+1] + dp[i][j])
       }
   }
    return dp[0][0]
}

// 정답 맞추고 효율성 통과한 코드
function solution(triangle) {
    //     0
    //    0 1
    //   0 1 2
    //  0 1 2 3
   var dp = triangle.map((row) => [...row])

   for(i=triangle.length-2; i >= 0; i--) {
       let res = []
       for(j=0; j< triangle[i].length; j++) {
           res = Math.max(dp[i+1][j], dp[i+1][j+1])
           dp[i][j] += res
       }
   }
    return dp[0][0]
}
