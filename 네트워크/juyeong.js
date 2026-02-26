function solution(n, computers) {
    var answer = 0;
    const graph = new Map();
    const visited = new Set();
    for (let i=0; i<computers.length; i++) {
        for (let j=0; j<computers[i].length; j++) {
            if (!graph.has(i)) {
                graph.set(i,[]);
            }
            if (computers[i][j]===1) {
              graph.get(i).push(j);
            }
        }
    }
    function bfs(start) {
        const queue = [start];
        let head = 0;
        while (head<queue.length) {
            const current = queue[head++];
            for (const node of graph.get(current)) {
                if (!visited.has(node)) {
                    visited.add(node);
                    queue.push(node);
                }
            }
        }
        return 1;
    }
    for (let i=0; i<n; i++) {
        if (visited.has(i)) {
            continue;
        }
        answer += bfs(i)
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))