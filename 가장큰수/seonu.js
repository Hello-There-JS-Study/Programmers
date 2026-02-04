function solution(numbers) {
    // 문자열로 접근
    let result = numbers.sort((a, b) => String(b).localeCompare(String(a)))
    let answer = result.sort((a, b) => {
        let stringA = String(a)
        let stringB = String(b)
        return (stringB + stringA) - (stringA+stringB)})
    return answer.join("")
}
