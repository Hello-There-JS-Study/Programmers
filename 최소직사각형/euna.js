function solution(sizes) {
  const wArr = [];
  const hArr = [];

  sizes.forEach(([a, b]) => {
    wArr.push(Math.max(a, b));
    hArr.push(Math.min(a, b));
  });

  const w = wArr.sort((a, b) => b - a)[0];
  const h = hArr.sort((a, b) => b - a)[0];

  return w * h;
}

// 정렬을 하지 않는다면?
function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (const [a, b] of sizes) {
    const w = Math.max(a, b);
    const h = Math.min(a, b);
    if (w > maxW) maxW = w;
    if (h > maxH) maxH = h;
  }

  return maxW * maxH;
}
