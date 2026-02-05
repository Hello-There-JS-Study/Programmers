// N = numbers.length
// K = 숫자 하나를 문자열로 바꿨을 때 평균 자릿수
function solution(numbers) {
  // TC: O(N*K)
  // SC: O(N*K)
  const arr = numbers.map(String);
  // TC: O(N log N * K) , 내부 비교정렬이 최대 2k => O(K)
  // SC: O(N) ~ O(log N), 내부 비교 정렬 O(K)
  arr.sort((a, b) => (b + a).localeCompare(a + b));

  // TC: O(N*K)
  // SC: O(N*K)
  return arr[0] === "0" ? "0" : arr.join("");
}

// TC: O(N*K) + O(N log N * K) + O(N·K) => O(N log N)
// SC: O(N*K)
