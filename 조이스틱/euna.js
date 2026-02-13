function solution(name) {
  let answer = 0;
  const length = name.length;

  for (let i = 0; i < length; i++) {
    answer += Math.min(name.charCodeAt(i) - 65, 91 - name.charCodeAt(i));
  }

  let move = length - 1;

  for (let i = 0; i < length; i++) {
    let next = i + 1;

    while (next < length && name[next] === 'A') {
      next++;
    }

    move = Math.min(move, i * 2 + length - next, (length - next) * 2 + i);
  }

  return answer + move;
}
