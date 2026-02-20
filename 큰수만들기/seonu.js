function solution(number, k) {
    let numList = number.split('')
    let stack = []
    let removeCnt = k
    
    for (let i=0; i < numList.length; i++) {
        let curr = numList[i]
        // stack에 뺄 요소가 있고
        // 직전 요소보다 크며
        // removeCnt가 0보다 크면
        // stack에 있는 요소를 빼고 집어 넣는다
        while (stack.length > 0 && stack[stack.length - 1] < curr && removeCnt > 0) {
            stack.pop()
            removeCnt--
        }
        stack.push(curr)
    }
    
    if(removeCnt > 0) {
        stack = stack.slice(0, numList.length - removeCnt)
    }
    
    return stack.join('')
}
