function solution(numbers, target) {
  let answer = 0;

  function dfs(index, current) {
    if (index === numbers.length) {
      if (current === target) answer++;
      return;
    }

    dfs(index + 1, current + numbers[index]);
    dfs(index + 1, current - numbers[index]);
  }

  dfs(0, 0);
  return answer;
}
