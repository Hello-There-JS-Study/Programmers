function solution(n, lost, reserve) {
    
    let answer = 0;
    // 학생 수만큼 배열 생성
    // 유니폼 수를 1로 초기화
    const hasUniform = new Array(n).fill(1);
    
    // 잃어버린 학생은 (유니폼 수 - 1)
    for (let i = 0; i < lost.length; i++) {
        hasUniform[lost[i] - 1]--;
    }
    // 여벌이 있는 학생은 (유니폼 수 + 1)
    for (let j = 0; j < reserve.length; j++) {
        hasUniform[reserve[j] - 1]++;
    }
    
    // 잃어버린 학생들 좌우에 여벌이 있는 학생이 있을시 (유니폼 수 + 1)
    for (let k = 0; k < hasUniform.length; k++) {
        if (!hasUniform[k]) {
            // 좌측에 여벌이 있을 시
            if (hasUniform[k - 1] === 2) {
                hasUniform[k]++;
                hasUniform[k-1]--;
            }
            // 우측에 여벌이 있을 시
            else if (hasUniform[k + 1] === 2) {
                hasUniform[k]++;
                hasUniform[k+1]--;
            }
        }
    }
    
    // 유니폼이 1개 이상인 사람 수 구하기
    for (let i = 0; i < hasUniform.length; i++) {
        if (hasUniform[i]) answer++;
    }
    
    return answer;
}
