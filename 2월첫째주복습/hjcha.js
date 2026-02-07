//  최소 힙 (Min Heap) 구현
// - 배열 기반의 완전 이진 트리 구조
// - 부모 노드가 항상 자식 노드보다 작거나 같은 성질을 유지
// - 삽입/삭제 시간복잡도: O(log n)
class MinHeap {
    constructor() {
        this.heap = []; // 힙을 저장할 배열 (인덱스 0부터 시작)
    }
    
    size() {
        return this.heap.length;
    }
    
    // 최솟값 확인 (제거하지 않음) - O(1)
    peek() {
        return this.heap[0]; // 루트 노드가 항상 최솟값
    }
    
    // 값 삽입 - O(log n)
    push(value) {
        this.heap.push(value);  // 1) 배열 맨 끝에 추가
        this.bubbleUp();        // 2) 힙 성질을 만족하도록 위로 올림
    }
    
    // 최솟값 꺼내기 - O(log n)
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop(); // 원소 1개면 그냥 반환
        
        const min = this.heap[0];          // 1) 루트(최솟값) 저장
        this.heap[0] = this.heap.pop();    // 2) 마지막 원소를 루트로 이동
        this.bubbleDown();                 // 3) 힙 성질을 만족하도록 아래로 내림
        return min;
    }
    
    // 삽입 후 힙 성질 복원: 새로 추가된 노드를 위로 올리는 과정
    // 부모보다 작으면 swap하며 올라감
    bubbleUp() {
        let index = this.size() - 1; // 방금 추가된 마지막 원소부터 시작
        
        while (index > 0) {
            // 부모 인덱스 공식: (자식 인덱스 - 1) / 2 (내림)
            const parentIndex = Math.floor((index - 1) / 2);
            
            // 부모가 나보다 작거나 같으면 힙 성질 만족 → 종료
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            // 부모가 나보다 크면 swap (구조 분해 할당으로 교환)
            [this.heap[parentIndex], this.heap[index]] = 
            [this.heap[index], this.heap[parentIndex]];
            
            index = parentIndex; // 부모 위치로 이동해서 계속 비교
        }
    }
    
    // 삭제 후 힙 성질 복원: 루트로 올라온 노드를 아래로 내리는 과정
    // 자식 중 더 작은 쪽과 swap하며 내려감
    bubbleDown() {
        let index = 0; // 루트부터 시작
        
        while (true) {
            // 자식 인덱스 공식: 왼쪽 = 2i+1, 오른쪽 = 2i+2
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index; // 현재 노드를 일단 최솟값 후보로 설정
            
            // 왼쪽 자식이 존재하고 현재보다 작으면 후보 갱신
            if (leftChild < this.size() && 
                this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            
            // 오른쪽 자식이 존재하고 현재 후보보다 작으면 후보 갱신
            if (rightChild < this.size() && 
                this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            
            // 현재 노드가 가장 작으면 힙 성질 만족 → 종료
            if (smallest === index) break;
            
            // 더 작은 자식과 swap
            [this.heap[index], this.heap[smallest]] = 
            [this.heap[smallest], this.heap[index]];
            
            index = smallest; // swap한 자식 위치로 이동해서 계속 비교
        }
    }
}