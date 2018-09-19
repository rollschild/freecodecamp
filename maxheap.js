var MaxHeap = function() {
  // change code below this line
  let heap = [];
  this.insert = (value) => {
    heap.push(value);
    if (heap.length > 1) {
      let size = heap.length;
      // pos is size - 1
      for (let pos = size - 1; pos > 0; pos--) {
        let parent = Math.floor((pos-1)/2);
        if (heap[parent] < heap[pos]) {
          let tmp = heap[parent];
          heap[parent] = heap[pos];
          heap[pos] = tmp;
        }
      } 
    }
  };
  this.print = () => {
    return heap;
  };

  this.remove = () => {
    if (heap.length === 0) return null;
    let size = heap.length;
    let max = heap[0];
    heap[0] = heap[size - 1];
    heap.pop();
    size--;
    for (let i = 0; i < size-1; i++) {
      let leftChild = 2 * i + 1;
      let rightChild = 2 * i + 2;
      if (heap[i] < heap[leftChild]) {
        let tmp = heap[i];
        heap[i] = heap[leftChild];
        heap[leftChild] = tmp;
        //continue;
      }
      if (heap[i] < heap[rightChild]) {
        let tmp = heap[i];
        heap[i] = heap[rightChild];
        heap[rightChild] = tmp;
      }
    }
    return max;
  };
};
