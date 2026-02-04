/*
-1을 return하면, a가 앞으로 가
1을 return하면, b가 앞으로 가
0을 return하면, 그대로 유지해
*/
function sorting(a, b) {
  if (a + b > b + a) {
    return -1;
  }
  return 1;
}

function solution(numbers) {
  // 구해야하는 것 : 0 또는 양의 정수가 주어졌을때, 정수를 이어 붙여 만들 수 있는 가장 큰 수 만들기
  var answer = "";

  let givenArray = numbers.map(String);
  givenArray.sort(sorting);

  console.log(givenArray);

  for (let i = 0; i < givenArray.length; i++) {
    answer = answer + givenArray[i];
  }

  // 예외처리! 다 0이면 0000이 아니라, 0으로 보내야한다.
  if (givenArray[0] === "0") {
    answer = "0";
  }

  return answer;
}
