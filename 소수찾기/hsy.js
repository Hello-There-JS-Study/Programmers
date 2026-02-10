// 1. 주어진 숫자 문자열(numbers)의 모든 자리 조합으로 만들 수 있는 수를 전부 만든다.
//  - 길이 1~n까지 순열로 생성
// 2. 중복 제거 Set
// 3. 각 수가 소수인지 판별해서 카운트
//  - 0, 1은 소수 아님
//  - 2 ~ sqrt(x)까지만 나눠보면 충분
function solution(numbers) {
    const set = new Set();
    
    function dfs(cur, rest) {
        if (cur) set.add(+cur);

        for (let i = 0; i < rest.length; i++) {
            dfs(cur + rest[i], rest.slice(0, i) + rest.slice(i + 1));
        }
    }

    dfs("", numbers);

    let answer = 0;
    
    for (const n of set) {
        if (isPrime(n)) answer++;
    }
    
    return answer;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
