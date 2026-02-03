class MinHeap {
   constructor() {
      this.h = []
   }

   push(val) {
      this.h.push(val)
      this.bubbleUp()
   }

   pop() {
      if (this.size() === 1) return this.h.pop()
      const top = this.h[0]
      this.h[0] = this.h.pop()
      this.bubbleDown()
      return top
   }

   size() {
      return this.h.length
   }

   bubbleUp() {
      let index = this.h.length - 1
      while (index > 0) {
         let parentIndex = Math.floor((index - 1) / 2)
         if (this.h[parentIndex] <= this.h[index]) break
         ;[this.h[parentIndex], this.h[index]] = [this.h[index], this.h[parentIndex]]
         index = parentIndex
      }
   }

   bubbleDown() {
      let index = 0
      const length = this.h.length
      while (true) {
         let left = index * 2 + 1
         let right = index * 2 + 2
         let swap = null

         if (left < length) {
            if (this.h[left] < this.h[index]) swap = left
         }
         if (right < length) {
            if ((swap === null && this.h[right] < this.h[index]) || (swap !== null && this.h[right] < this.h[left])) {
               swap = right
            }
         }

         if (swap === null) break
         ;[this.h[index], this.h[swap]] = [this.h[swap], this.h[index]]
         index = swap
      }
   }
}

function solution(scoville, K) {
   const h = new MinHeap()
   scoville.forEach((s) => h.push(s))

   let cnt = 0

   while (h.size() >= 2 && h.h[0] < K) {
      const first = h.pop()
      const second = h.pop()
      const s = first + second * 2
      h.push(s)
      cnt++
   }

   if (h.h[0] >= K) return cnt
   else return -1
}
