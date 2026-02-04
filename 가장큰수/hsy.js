function solution(numbers) {
    const sorted = numbers.map((num) => String(num))
                .sort((a,b) => (b+a)-(a+b))

    // numbers 값이 전부 0일 경우 "0" 리턴
    return Number(sorted[0]) ? sorted.join("") : "0";
}
