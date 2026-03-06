function solution(begin, target, words) {
    var cnt = 0
    var len = begin.split('').length
    var visited = new Array(words.length).fill(false)
    
    var queue = []
    queue.push([begin,0])
    
    while (queue.length > 0) {
        let [curr, depth] = queue.shift()
        if (curr === target) return depth
        
        for (let i=0; i <words.length; i++) {
            if(oneDiff(words[i], curr) && !visited[i]) {
                visited[i] = true
                queue.push([words[i], depth + 1])
            }
        }
    }
    return 0
}

const oneDiff = (arr1, arr2) => {
    var count = 0
    for (let i=0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) count++
    }
    return count === 1 ? true : false
}
