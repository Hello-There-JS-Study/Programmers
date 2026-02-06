function solution(citations) {
  // 1) 내림차순 정렬 (큰 인용수부터)
  citations.sort((a, b) => b - a);

  let h = 0;

  // 2) i번째 논문까지는 총 (i+1)편
  for (let i = 0; i < citations.length; i++) {
    const papers = i + 1; // 지금까지 논문 수
    const cited = citations[i]; // i번째 논문의 인용 수

    // papers편이 각각 papers번 이상 인용되었는지 확인하는 느낌
    if (cited >= papers) {
      h = papers; // 조건 만족하면 h를 갱신 (정렬되어 있으니 점점 커질 수 있음)
    } else {
      // 내림차순 정렬이므로 여기서 실패하면 뒤는 더 작은 값 -> 더 이상 h 증가 불가
      break;
    }
  }

  return h;
}
