function sortNum(a, b) {
  return a - b;
}

function solution(array, commands) {
  // 구해야하는 것: 배열 array의 i번째부터 j번째까지 자르고 정렬했을때, k번째 있는 수 구하기
  // commands : 2차원 배열이고, 각 배열마다 [i, j, k]의 값을 원소로 가지고 있음

  var answer = [];

  for (let num = 0; num < commands.length; num++) {
    let i = commands[num][0];
    let j = commands[num][1];
    let k = commands[num][2];

    answer.push(array.slice(i - 1, j).sort(sortNum)[k - 1]);
  }

  return answer;
}
