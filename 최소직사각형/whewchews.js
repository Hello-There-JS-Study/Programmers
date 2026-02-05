/*
1. 입력크기
N = sizes.length (1~10000)
[w, h] (1~1000)
2. 자료구조
- 배열 순회 + 최대값 갱신
3. 아이디어
- 모든 명함을 수납할 수 있는 가장 작은 지갑
- return w * h
- 긴쪽 방향을 한방향으로 정렬
- 긴쪽의 최대, 짧은 쪽의 최대 값을 곱해서 리턴

*/
function solution(sizes) {
  // SC: O(1)
  let maxW = 0;
  let maxH = 0;

  // TC: O(N)
  for (const [w, h] of sizes) {
    const big = Math.max(w, h);
    const small = Math.min(w, h);

    if (maxW < big) maxW = big;
    if (maxH < small) maxH = small;
  }

  return maxW * maxH;
}
// SC: O(1)
// TC: O(N)
