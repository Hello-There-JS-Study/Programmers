function solution(n, times) {
    // 1. 오름차순 정렬 (최적화를 위해 가장 빠른 심사관을 기준으로 최대 시간 설정)
    times.sort((a, b) => a - b);

    let left = 1;
    let right = times[times.length - 1] * n; // 가장 느린 심사관이 모두 처리하는 경우
    let answer = right;

    // 2. 이분 탐색
    while (left <= right) {
        // BigInt를 사용하지 않아도 되는 범위라면 Math.floor 사용
        let mid = Math.floor((left + right) / 2);
        
        // mid 시간 동안 심사할 수 있는 총 인원 수 계산
        let people = 0;
        for (let time of times) {
            people += Math.floor(mid / time);
            if (people >= n) break; // 이미 n명을 넘었다면 조기 종료
        }

        // 3. 조건에 따른 범위 조정
        if (people >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}