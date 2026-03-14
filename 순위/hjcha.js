function solution(n, results) {
    // 1. 승리/패배 그래프 초기화
    const wins = Array.from({ length: n + 1 }, () => []);
    const loses = Array.from({ length: n + 1 }, () => []);

    results.forEach(([winner, loser]) => {
        wins[winner].push(loser); // winner가 이긴 사람들
        loses[loser].push(winner); // loser를 이긴 사람들
    });

    let answer = 0;

    // 2. BFS 탐색 함수 (특정 노드에서 출발해 연결된 노드 개수 세기)
    const bfs = (start, graph) => {
        const queue = [start];
        const visited = Array(n + 1).fill(false);
        visited[start] = true;
        let count = 0;

        while (queue.length > 0) {
            const current = queue.shift();
            for (const next of graph[current]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }
        return count;
    };

    // 3. 각 선수마다 이긴 사람과 진 사람 수 카운트
    for (let i = 1; i <= n; i++) {
        const winCount = bfs(i, wins);
        const loseCount = bfs(i, loses);

        // 본인을 제외한 (n - 1)명과 관계가 명확하면 순위 확정
        if (winCount + loseCount === n - 1) {
            answer++;
        }
    }

    return answer;
}



// function solution(n, results) {
//     플로이드 마셜을 사용한 풀이
//     // 1. 2차원 배열 초기화 (1번부터 n번 선수까지 사용하기 위해 크기를 n+1로 설정)
//     const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

//     // 2. 초기 경기 결과 반영
//     results.forEach(([winner, loser]) => {
//         graph[winner][loser] = true; // winner가 loser를 이김
//     });

//     // 3. 플로이드-워셜 알고리즘 적용
//     // 거쳐가는 선수(k), 승자(i), 패자(j)
//     for (let k = 1; k <= n; k++) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= n; j++) {
//                 // i가 k를 이기고, k가 j를 이겼다면 i는 j를 이긴 것이다.
//                 if (graph[i][k] && graph[k][j]) {
//                     graph[i][j] = true;
//                 }
//             }
//         }
//     }

//     let answer = 0;

//     // 4. 정확한 순위를 알 수 있는 선수 카운트
//     for (let i = 1; i <= n; i++) {
//         let knownCount = 0;
//         for (let j = 1; j <= n; j++) {
//             // i가 j를 이겼거나(graph[i][j]), j가 i를 이겼다면(graph[j][i]) 관계를 아는 것
//             if (graph[i][j] || graph[j][i]) {
//                 knownCount++;
//             }
//         }
        
//         // 본인을 제외한 (n - 1)명과의 승패를 모두 안다면 순위 확정
//         if (knownCount === n - 1) {
//             answer++;
//         }
//     }

//     return answer;
// }