// array.length <= 100, commands.length <= 50 -> O(N^2) 가능
function solution(array, commands) {
    return commands.map(([start,end,index]) => (
        array.slice(start-1,end).sort((a,b) => a-b)[index-1]
    ))
}
