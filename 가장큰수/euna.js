function solution(numbers) {
  const sorted = numbers.map(String).sort((a, b) => (b + a) - (a + b));

  if (sorted[0] === '0') return '0';
  return sorted.join('');
}
