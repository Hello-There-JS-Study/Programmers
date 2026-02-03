/*
1.입력크기
- N = 1,000,000
=> 매번 정렬(n log n)하면 터짐

2.자료구조
- 매번 가장 작은 2개를 빠르게 꺼내야 함
- 최소 힙

3.반례
- 시작부터 min >= K면 답은 0
- K가 0이면 무조건 0 (모든 원소가 0 이상이라)
- 섞다가 힙이 1개 남았는데 아직 peek() < K면 -1

4.아이디어
- 반복 조건: 힙의 최소값이 K 이상이면 종료 (이미 다 K 이상)
- 실패 조건: 최소값이 K 미만인데, 힙에 원소가 1개 이하면 더 섞을 수 없음 → -1
*/
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

    // O(N) heapify (bottom-up)
    _heapify() {
      for (let i = (this.h.length >> 1) - 1; i >= 0; i--) {
        this._siftDown(i);
      }
    }
  }

  // ---- Edge cases ----
  if (K <= 0) return 0;

  const heap = new MinHeap(scoville.slice()); // 원본 보존
  let count = 0;

  // ---- Main loop ----
  while (heap.size() > 0 && heap.peek() < K) {
    if (heap.size() < 2) return -1;

    const a = heap.pop(); // 최소
    const b = heap.pop(); // 두 번째 최소
    const mixed = a + b * 2;

    heap.push(mixed);
    count++;
  }

  return count;
}
