function solution(word) {
  var res = new Map();
  let idx = 0;
  function dfs(current) {
    res[current] = idx;
    if (current.length === 5) {
      return;
    }
    for (let w of ['A', 'E', 'I', 'O', 'U']) {
      current = current += w;
      idx++;
      dfs(current);
      current = current.slice(0, -1)
    }
  }
  dfs('');
  return res[word];
}