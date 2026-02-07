// 행렬의 곱셈 새로운 문제 풀이
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

/*
[주어진 것]
- 2차원 행렬 arr1, arr2

[구해야하는 것]
- arr1에 arr2를 곱한 결과

[행렬의 곱을 구하는 방법]
- arr1에서는 하나의 배열을 가져오고, arr2는 맨 첫번째 요소들만 가져와. ( = arr1에서는 행, arr2에서는 열을 가져와서 순서대로 곱하고 더하기)
*/

function solution(arr1, arr2) {
  let r1 = arr1.length; // arr1의 행의 개수
  let c1 = arr1[0].length; // arr1의 열의 개수
  let c2 = arr2[0].length; // arr2의 열의 개수

  const answer = Array.from({ length: r1 }, () => Array(c2).fill(0));

  for (i = 0; i < r1; i++) {
    for (j = 0; j < c2; j++) {
      let sum = 0;
      for (k = 0; k < c1; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = sum;
    }
  }

  console.log(arr1[0], arr2[0], arr1[0] * arr2[0]);
  return answer;
}
