function solution(sizes) {
    // 각 명함을 [긴 쪽, 짧은 쪽]으로 정렬
    const normalized = sizes.map(([w, h]) => {
        return w >= h ? [w, h] : [h, w];
    });
    
    // 긴 쪽의 최댓값, 짧은 쪽의 최댓값 구하기
    const maxWidth = Math.max(...normalized.map(card => card[0]));
    const maxHeight = Math.max(...normalized.map(card => card[1]));
    
    return maxWidth * maxHeight;
}