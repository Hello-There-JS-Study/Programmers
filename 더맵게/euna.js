class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  add(value) {
    this.heap.push(value);
    this.up();
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.down();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  up() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  down() {
    let currentIndex = 0;
    const length = this.heap.length;

    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;
      let smallestIndex = currentIndex;

      if (leftIndex < length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === currentIndex) break;

      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach((a) => heap.add(a));

  let answer = 0;

  while (heap.size() > 0 && heap.peek() < K) {
    const a = heap.pop();
    const b = heap.pop();

    if (b === undefined) return -1;

    heap.add(a + b * 2);
    answer++;
  }

  return answer;
}

// 최소힙 문제라는 것을 몰랐다면? (효율성 테스트 통과 X)
function solution(scoville, K) {
  let answer = 0;
  let arr = [...scoville];

  while (true) {
    arr.sort((a, b) => a - b);

    if (arr[0] >= K) return answer;
    if (arr.length === 1) return -1;

    const newFood = arr[0] + arr[1] * 2;
    arr.splice(0, 2, newFood);
    answer++;
  }
}
