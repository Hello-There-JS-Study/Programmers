// 섬 연결하기
function solution(n, costs) {
    var result = 0
    var parent = Array.from({length: n}, (v,i) => i)

    const find = (x) => {
        // root가 아니라면
        if (parent[x] !== x) return parent[x] = find(parent[x])
        return parent[x]
    }
    const union = (a,b) => {
        a = find(a)
        b = find(b)
        if (a !== b) return parent[b] = a
    }

    costs.sort((a,b) => a[2] - b[2])

    for (const cost of costs) {
        let start = cost[0]
        let end = cost[1]
        if (find(start) !== find(end)) {
            union(start, end)
            result += cost[2]
        }
    }

    return result
}
