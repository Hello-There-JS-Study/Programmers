function solution(m, n, puddles) {
    const Num = 1000000007
    var shortCut = Array.from({length: n+1}, () => new Array(m+1).fill(-1))
    // 웅덩이는 shortCut을 0로 함
    for (const puddle of puddles) {
        shortCut[puddle[1]][puddle[0]] = 0
    }
    // 행 i, n
    // 열 j, m
    
    // 해당 칸의 최소(i,j) = 왼쪽 칸(i-1,j) + 위쪽칸(i,j+1)

    // 웅덩이가 아니라면 초기세팅을 아래와 같이
    // 1행의 모든 곳 1 로 세팅
    for (let j=1; j< m+1; j++) {
        if(shortCut[1][j] == 0) break
        shortCut[1][j] = 1
    }
    // 1열의 모든 곳 1 로 세팅
    for (let i=1; i< n+1; i++) {
        if(shortCut[i][1] == 0) break
        shortCut[i][1] = 1
    }
    
    // i+j 가 1+1 ~ n+m 까지 순회해서 값을 저장하기
    // shortCut!==-1 이라면, 이미 값을 저장한 후이니깐 넘어가기
    // shortCut===0 이라면, 웅덩이이므로 넘어가기
    
    for (let i=1; i<n+1; i++) {
        for(j=1; j<m+1; j++) {
            if (i== 1 && shortCut[i][j] === -1 || j== 1 && shortCut[i][j] === -1 ) {
                shortCut[i][j] = 0
                continue
            }
            
            if (shortCut[i][j] == -1) {
                shortCut[i][j] = ((shortCut[i-1][j] ?? 0) + (shortCut[i][j-1] ?? 0)) % Num
            }
        }
    }
    
    return shortCut[n][m]
function solution(m, n, puddles) {
    const Num = 1000000007
    var shortCut = Array.from({length: n+1}, () => new Array(m+1).fill(-1))
    // 웅덩이는 shortCut을 0로 함
    for (const puddle of puddles) {
        shortCut[puddle[1]][puddle[0]] = 0
    }
    // 행 i, n
    // 열 j, m
    
    // 해당 칸의 최소(i,j) = 왼쪽 칸(i-1,j) + 위쪽칸(i,j+1)

    // 웅덩이가 아니라면 초기세팅을 아래와 같이
    // 1행의 모든 곳 1 로 세팅
    for (let j=1; j< m+1; j++) {
        if(shortCut[1][j] == 0) break
        shortCut[1][j] = 1
    }
    // 1열의 모든 곳 1 로 세팅
    for (let i=1; i< n+1; i++) {
        if(shortCut[i][1] == 0) break
        shortCut[i][1] = 1
    }
    
    // i+j 가 1+1 ~ n+m 까지 순회해서 값을 저장하기
    // shortCut!==-1 이라면, 이미 값을 저장한 후이니깐 넘어가기
    // shortCut===0 이라면, 웅덩이이므로 넘어가기
    
    for (let i=1; i<n+1; i++) {
        for(j=1; j<m+1; j++) {
            if (i== 1 && shortCut[i][j] === -1 || j== 1 && shortCut[i][j] === -1 ) {
                shortCut[i][j] = 0
                continue
            }
            
            if (shortCut[i][j] == -1) {
                shortCut[i][j] = ((shortCut[i-1][j] ?? 0) + (shortCut[i][j-1] ?? 0)) % Num
            }
        }
    }
    
    return shortCut[n][m]
}}
