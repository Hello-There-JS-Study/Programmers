class MinHeap {
    constructor() {
        this.heap = []
    }
    
    push(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    
    pop() {
        if (this.heap.length == 0) return null
        if (this.heap.length == 1) return this.heap.pop()
        const min = this.heap[0]
        // 뒤에 있는 요소, 루트로 가져오기
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }
    
    peek() {
        return this.heap[0]
    }
    
    heapifyDown() {
        // 0-base
        let index = 0
        let len = this.heap.length
        
        while (index < this.heap.length) {
            let leftChildIndex = index * 2 + 1
            let rightChildIndex = index * 2 + 2
            let smallestIndex = index
            
            if (leftChildIndex < len && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex
            }
            
            if (rightChildIndex < len && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex
            }
            
            if (index == smallestIndex) break
            
            [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]]
            index = smallestIndex
        }
    }
    
    heapifyUp() {
        // 0-base
        let index = this.heap.length - 1
        
        while (index > 0) {
            let rootIndex = Math.floor((index - 1)/2)
            // 종료 조건
            if (this.heap[rootIndex] <= this.heap[index]) break;
            [this.heap[index], this.heap[rootIndex]] = [this.heap[rootIndex], this.heap[index]]
            index = rootIndex
        }
    }
}

function solution(scoville, K) {
    let cnt = 0
    let heap = new MinHeap()
    scoville.forEach((el) => heap.push(el))
    
    while (1) {
        // 종료 조건
        if (heap.peek() >= K) break
        // -1 return 해야될때
        if (heap.heap.length == 1) return -1
        
        let firstMin = heap.pop()
        let secondMin = heap.pop()
        
        let newMin = firstMin + secondMin * 2
        heap.push(newMin)
        cnt += 1
    }
    return cnt
}
