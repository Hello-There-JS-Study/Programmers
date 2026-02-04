function solution(array, commands) {
    var answer = [];
    commands.forEach((command) => {
        let sortedArr
        
        let startIndex = command[0] - 1
        let endIndex = command[1] - 1
        let findIndex = command[2] - 1
        
        sortedArr = array.slice(startIndex, endIndex + 1).sort((a,b) => a - b)
        let result = sortedArr[findIndex]
        
        answer.push(result)
    })
    return answer;
}
