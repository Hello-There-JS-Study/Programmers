/**
 * 1. 입력크기
 * - N = word.length (1 ≤ N ≤ 5)
 * - 문자는 'A','E','I','O','U'만 사용
 * 2. 자료구조
 * - 문자열, 배열
 * 3. 아이디어
 * - 사전은 "사전순"으로 정렬된 길이 1~5의 모든 단어
 * - 현재 글자가 A/E/I/O/U 중 몇 번째인지(0~4) 구하고, 그에 따른 가중치(weights)를 곱해 누적
 * - (현재 글자의 인덱스) * weights[i] 만큼 앞 단어가 존재
 * - 현재 접두사 자체도 단어이므로 +1 을 더해 누적
 */

function solution(word) {
  const order = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const weights = [781, 156, 31, 6, 1];

  let ans = 0;

  for (let i = 0; i < word.length; i++) {
    ans += order[word[i]] * weights[i] + 1;
  }

  return ans;
}

// TC: O(N)
// SC: O(1)
