function solution(n, lost, reserve) {
    // 여벌 체육복을 가져왔지만 도난당한 학생 처리
    // 이 학생들은 자기 것만 입으므로 빌려줄 수도, 빌릴 필요도 없음
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));
    
    // 앞번호부터 순서대로 처리하기 위해 정렬
    realLost.sort((a, b) => a - b);
    
    // 기본적으로 도난당하지 않은 학생은 모두 수업 참여 가능
    let answer = n - realLost.length;
    
    // 도난당한 학생마다 빌릴 수 있는지 확인
    for (const l of realLost) {
        // 앞번호(l-1)에게 먼저 빌리기 시도 (그리디: 앞번호 우선)
        const idx = realReserve.indexOf(l - 1);
        if (idx !== -1) {
            // 빌려줬으므로 여벌 목록에서 제거
            realReserve.splice(idx, 1);
            answer++;
        } else {
            // 앞번호가 없으면 뒷번호(l+1)에게 빌리기 시도
            const idx2 = realReserve.indexOf(l + 1);
            if (idx2 !== -1) {
                realReserve.splice(idx2, 1);
                answer++;
            }
            // 둘 다 없으면 이 학생은 수업 참여 불가
        }
    }
    
    return answer;
}