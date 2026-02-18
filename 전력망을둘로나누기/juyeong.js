function dfs(node_link,node,visited) {
    const next_node = node_link.get(node);
    for (let cur of next_node) {
        if(!visited.includes(cur)) {
            visited.push(cur)
            dfs(node_link,cur,visited);
        }
    }
    return visited;
}

function set_node_link(node_link,a,b) {
    if (!node_link.has(b)) {
        node_link.set(b, []);
    }
    node_link.get(b).push(a);
    if (!node_link.has(a)) {
        node_link.set(a, []);
    }
    node_link.get(a).push(b);
}

function solution(n, wires) {
    var answer = 1e9;
    const node_link = new Map();

    for (let wire of wires) {
        const [a,b] = wire;
        set_node_link(node_link,a,b);
    }
    for (let wire of wires) {
        const [a,b] = wire;
        const v1 = dfs(node_link,a,[a,b]).length-1;
        const v2 = dfs(node_link,b,[a,b]).length-1;
        answer = Math.min(answer, Math.abs(v1-v2));
    }
    
    return answer;
}