function solution(n, vertex) {
    // 1. 인접 리스트 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 2. 거리 저장 배열 (방문하지 않은 곳은 -1)
    const distances = new Array(n + 1).fill(-1);
    const queue = [1]; // 시작점: 1번 노드
    distances[1] = 0;  // 시작점의 거리는 0

    // 3. BFS 탐색
    let head = 0;
    while (head < queue.length) {
        const current = queue[head++];
        
        for (const neighbor of graph[current]) {
            if (distances[neighbor] === -1) { // 아직 방문하지 않았다면
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 4. 가장 먼 거리 찾기 및 개수 세기
    const maxDistance = Math.max(...distances);
    return distances.filter(d => d === maxDistance).length;
}