function solution(brown, yellow) {
  const total = brown + yellow;

  for (let h = 3; h * h <= total; h++) {
    if (total % h !== 0) continue;

    const w = total / h;
    if (w < h) continue;

    if ((w - 2) * (h - 2) === yellow) {
      return [w, h];
    }
  }
}
