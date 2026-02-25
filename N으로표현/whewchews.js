/*
  1) 입력크기
     - N: 1~9
     - number: 1~32000
     - N 사용 횟수는 1~8까지만 탐색 (8 초과면 -1)

  2) 자료구조
     - dp[k]: Set
       -> N을 k번 사용해서 만들 수 있는 모든 결과값을 중복 없이 저장

  3) 아이디어 (DP)
     - 기본값: k번 이어붙인 수(예: N=5면 5, 55, 555, ...)
       dp[k].add(Number(String(N).repeat(k)))
     - 점화:
       dp[k]는 dp[j]와 dp[k-j]의 모든 조합 (j=1..k-1)에 대해
       a in dp[j], b in dp[k-j]
       a+b, a-b, b-a, a*b, a/b, b/a 를 넣는다
       (나눗셈은 "나머지 무시" => JS에선 Math.trunc로 0쪽으로 버림)
     - dp[k]에 number가 들어있으면 k가 최소 사용횟수 (k를 1부터 증가시키므로)
  */

function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let k = 1; k <= 8; k++) {
    dp[k].add(Number(String(N).repeat(k)));

    for (let j = 1; j < k; j++) {
      for (const a of dp[j]) {
        for (const b of dp[k - j]) {
          dp[k].add(a + b);
          dp[k].add(a - b);
          dp[k].add(b - a);
          dp[k].add(a * b);

          if (b !== 0) dp[k].add(Math.trunc(a / b));
          if (a !== 0) dp[k].add(Math.trunc(b / a));
        }
      }
    }

    if (dp[k].has(number)) return k;
  }

  return -1;
}
