function solution(name) {
    var moveSum = 0;
    var leftRightMoves = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        // 알파벳 위아래 이동
        let upMoves = name[i].charCodeAt(0) - "A".charCodeAt(0);
        let downMoves = 26 - upMoves;
        moveSum += Math.min(upMoves, downMoves);
        
        // 연속 A 찾기
        let nextIdx = i + 1;
        while (nextIdx < name.length && name[nextIdx] === "A") {
            nextIdx++;
        }
        
        // 좌우 최소 이동 계산
        let moveRight = i * 2 + name.length - nextIdx;
        let moveLeft = (name.length - nextIdx) * 2 + i;
        
        leftRightMoves = Math.min(leftRightMoves, moveRight, moveLeft);
    }
    
    return moveSum + leftRightMoves;
}

