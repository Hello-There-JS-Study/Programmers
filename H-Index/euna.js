function solution(citations) {
  citations.sort((a, b) => a - b);
  const n = citations.length;

  for (let i = 0; i < n; i++) {
    const h = n - i;
    if (citations[i] >= h) return h;
  }

  return 0;
}
