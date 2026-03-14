/**
 * BFS 방식: 각 노드에서 도달 가능한 노드 수를 카운트
 * 시간 복잡도: O(N * (N + E))
 */
function solution(n, results) {
    const wins = Array.from({ length: n + 1 }, () => []);
    const loses = Array.from({ length: n + 1 }, () => []);

    // 1. 인접 리스트 생성 (승리/패배 방향 분리)
    results.forEach(([winner, loser]) => {
        wins[winner].push(loser); // winner -> loser (승리 계보)
        loses[loser].push(winner); // loser <- winner (패배 계보)
    });

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

    let answer = 0;
    for (let i = 1; i <= n; i++) {
        // 이긴 관계와 진 관계를 합산하여 n-1인지 확인
        if (bfs(i, wins) + bfs(i, loses) === n - 1) {
            answer++;
        }
    }
    return answer;
}