function solution(number, k) {
  const stk = [];

  for (const ch of number) {
    while (k > 0 && stk.length && stk[stk.length - 1] < ch) {
      stk.pop();
      k--;
    }
    stk.push(ch);
  }

  if (k > 0) stk.splice(stk.length - k, k);

  return stk.join('');
}