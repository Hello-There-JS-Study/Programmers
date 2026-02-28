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
