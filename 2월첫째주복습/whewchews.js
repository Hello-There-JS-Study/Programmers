// 최소힙 만들기 복습
function solution(scoville, K) {
  class MinHeap {
    constructor(arr = []) {
      this.h = arr;
      if (this.h.length > 0) this._heapify();
    }

    size() {
      return this.h.length;
    }

    peek() {
      return this.h[0];
    }

    push(x) {
      const h = this.h;
      h.push(x);
      this._siftUp(h.length - 1);
    }

    pop() {
      const h = this.h;
      const n = h.length;
      if (n === 0) return undefined;
      if (n === 1) return h.pop();

      const root = h[0];
      h[0] = h.pop();
      this._siftDown(0);
      return root;
    }

    _parent(i) {
      return (i - 1) >> 1;
    }

    _left(i) {
      return (i << 1) + 1;
    }

    _right(i) {
      return (i << 1) + 2;
    }

    _siftUp(i) {
      const h = this.h;
      while (i > 0) {
        const p = this._parent(i);
        if (h[p] <= h[i]) break;
        [h[p], h[i]] = [h[i], h[p]];
        i = p;
      }
    }

    _siftDown(i) {
      const h = this.h;
      const n = h.length;

      while (true) {
        const l = this._left(i);
        const r = this._right(i);
        let smallest = i;

        if (l < n && h[l] < h[smallest]) smallest = l;
        if (r < n && h[r] < h[smallest]) smallest = r;

        if (smallest === i) break;
        [h[i], h[smallest]] = [h[smallest], h[i]];
        i = smallest;
      }
    }

    _heapify() {
      for (let i = (this.h.length >> 1) - 1; i >= 0; i--) {
        this._siftDown(i);
      }
    }
  }

  if (K <= 0) return 0;

  const heap = new MinHeap(scoville.slice());
  let count = 0;

  while (heap.size() > 0 && heap.peek() < K) {
    if (heap.size() < 2) return -1;

    const a = heap.pop();
    const b = heap.pop();
    const mixed = a + b * 2;

    heap.push(mixed);
    count++;
  }

  return count;
}
