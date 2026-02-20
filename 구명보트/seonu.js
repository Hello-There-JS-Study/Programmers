function solution(people, limit) {
    var answer = 0;
    var visited = [];
    var cnt = 0;
    var stack = people.sort((a,b) => a - b);
    
    while (stack.length > 0) {
        if(stack.length == 1) {
            cnt++
            stack.pop()
            break
        }
        if(stack[0] + stack[stack.length-1] > limit) {
            stack.pop()
        } else {
            stack.shift()
            stack.pop()
        }
        cnt++
    }
    return cnt;
}
