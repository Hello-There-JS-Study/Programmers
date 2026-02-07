function solution(sizes) {
    var answer = 0;
    let min = []
    let max = []
    sizes.forEach(([i, j]) => {
        if(i < j) {
            min.push(i)
            max.push(j)
        } else {
            min.push(j)
            max.push(i)
        }})
    return Math.max(...min) * Math.max(...max);
}
