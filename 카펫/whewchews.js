/*
* B (8~5000)
* Y (1~2백만)
* 중앙은 노란색, 테두리 1줄은 갈색
* return 카펫 가로, 세로 크기(가로>=세로)

* yellow를 우선 배치. 1*1, 2*1, 3*1, 4*1, 2*1, 2*2 ... 옆으로 길어야됨
* yellow (w - 2) * (h - 2)
* 
* h를 3부터 total까지 돈다(최대 제곱근 만큼만 돌면 됨 -> 결과가 total의 약수쌍이기 때문)
* 만약 total % h != 0이면 스킵 (직사각형이 안 됨)
* w = total / h
* 내부 칸 수 (w-2)*(h-2)가 yellow면 정답 반환
*/
function solution(brown, yellow) {
  // TC: O(1)
  const total = brown + yellow;

  // SC: O(N), sqrt(total)
  for (let h = 3; h * h <= total; h++) {
    if (total % h !== 0) continue;

    const w = total / h;
    if (yellow === (w - 2) * (h - 2)) {
      return [w, h];
    }
  }
}
// TC: O(1)
// SC: O(N), sqrt(total)
