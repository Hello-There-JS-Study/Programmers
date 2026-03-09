function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 최단거리 -> bfs
    // 모든 좌표에 *2, 마지막 결과에서 /2해주기
    
    // 1) 전부 *2 해주기
    characterX *= 2, characterY *= 2, itemX *= 2, itemY *= 2
    
    let doubleRect = rectangle.map(row1 => row1.map(v => v * 2)) 
    
    // 2) 이동 방향
    const dx = [0,0,-1,1]
    const dy = [-1,1,0,0]
    
    // 3) 움직일 수 있는 좌표를 정의해 모두 0으로 채움
    let map = Array.from({length:103}, () => Array(103).fill(0))
    
    // 4) 테두리는 1, 내부는 2, 외부는 0으로 map 설정
    doubleRect.forEach(([x1,y1,x2,y2])=>{
        for(let i =x1;i<=x2;i++){
            for(let j=y1;j<=y2;j++){
                if(i === x1 || i === x2 || j === y1 || j === y2){
                    if(map[i][j]===0) map[i][j]=1
                }
                else{map[i][j]=2;}
            }
        }
    })
    // 시작점은 탐색 안되니!
    map[characterX][characterY]=0
    
    // 5) BFS 시작
    // 마지막은 cnt
    let start = [characterX, characterY, 0]
    let queue = [start]
    
    while(queue.length > 0){
        
        let [x,y,cnt]=queue.shift();
        
        
        if(x === itemX && y === itemY){ return cnt/2; }
        
        for(let d=0;d<4;d++){
            let nx=x+dx[d]
            let ny=y+dy[d]
            if(map[nx][ny]===1){
                queue.push([nx,ny,cnt+1])
                map[nx][ny]=0
            }
        }
        
    }
    return 0
    
}
