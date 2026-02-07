const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, K] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)

const minHeap = [null]

const swap = (a, b) => {
  [minHeap[a], minHeap[b]] = [minHeap[b], minHeap[a]];
}

const heapifyUp = (index) => {
  while (index > 1) {
    const parent = Math.floor(index / 2);
    if (minHeap[index] < minHeap[parent]) {
      swap(index, parent);
      index = parent;
    } else break;
  }
}

const heapifyDown = (index) => {
  while (true) {
    const left = index * 2
    const right = index * 2 + 1
    let smallest = index

    if (left < minHeap.length && minHeap[left] < minHeap[smallest]) {
      smallest = left
    }
    if (right < minHeap.length && minHeap[right] < minHeap[smallest]) {
      smallest = right
    }

    if (smallest === index) break

    swap(index, smallest)
    index = smallest
  }
}

const push = (value) => {
  minHeap.push(value)
  heapifyUp(minHeap.length - 1)
}

const popMin = () => {
  if (minHeap.length === 2) return minHeap.pop()

  minHeap[1] = minHeap.pop()
  heapifyDown(1)
}

for (const num of numbers) {
  push(num)
}

for (let i = 1; i < K; i++) {
  popMin()
}

console.log(minHeap[1])

