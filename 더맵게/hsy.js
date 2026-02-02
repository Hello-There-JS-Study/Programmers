class MinHeap {
  constructor() {
    this.a = [];
  }

  size() {
    return this.a.length;
  }

  peek() {
    return this.a[0];
  }

  push(x) {
    const a = this.a;
    a.push(x);
    let i = a.length - 1;

    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }

  pop() {
    const a = this.a;
    const n = a.length;
    if (n === 0) return undefined;
    if (n === 1) return a.pop();

    const top = a[0];
    a[0] = a.pop();

    let i = 0;
    while (true) {
      const l = i * 2 + 1;
      const r = l + 1;
      let m = i;

      if (l < a.length && a[l] < a[m]) m = l;
      if (r < a.length && a[r] < a[m]) m = r;
      if (m === i) break;

      [a[i], a[m]] = [a[m], a[i]];
      i = m;
    }

    return top;
  }

  // O(n)으로 한 번에 힙 만들기 (선택: 성능 좋아짐)
  heapify(arr) {
    this.a = arr.slice();
    const a = this.a;
    for (let i = (a.length - 2) >> 1; i >= 0; i--) {
      this._siftDown(i);
    }
  }

  _siftDown(i) {
    const a = this.a;
    while (true) {
      const l = i * 2 + 1;
      const r = l + 1;
      let m = i;

      if (l < a.length && a[l] < a[m]) m = l;
      if (r < a.length && a[r] < a[m]) m = r;
      if (m === i) break;

      [a[i], a[m]] = [a[m], a[i]];
      i = m;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  heap.heapify(scoville); // push로 하나씩 넣어도 되지만 heapify가 빠름

  let count = 0;

  while (heap.size() > 0 && heap.peek() < K) {
    if (heap.size() < 2) return -1; // 더 섞을 수 없음

    const a = heap.pop();
    const b = heap.pop();
    heap.push(a + b * 2);
    count++;
  }

  return count;
}
