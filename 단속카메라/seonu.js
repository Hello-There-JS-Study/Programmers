function solution(routes) {
    // routes를 뒤에 end가 작은순으로 오름차순으로 정렬
    routes.sort((a,b) => a[1] - b[1])
    // 초기 카메라 위치를 첫번째의 end 값으로
    var cameraPos = routes[0][1]
    var cnt = 1
    
    for(let route of routes) {
        let start = route[0]
        let end = route[1]
        
        if(start > cameraPos) {
            cnt += 1
            cameraPos = end
        }
    }
    return cnt
}
