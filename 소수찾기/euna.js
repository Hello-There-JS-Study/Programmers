function solution(numbers) {
  const set = new Set();

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function make(remaining, current) {
    if (current.length > 0) set.add(Number(current));

    for (let i = 0; i < remaining.length; i++) {
      const next = remaining[i];
      const rest = remaining.slice(0, i) + remaining.slice(i + 1);
      make(rest, current + next);
    }
  }

  make(numbers, '');

  let answer = 0;
  for (const n of set) {
    if (isPrime(n)) answer++;
  }
  return answer;
}
