// check if array is sorted
function isSorted(arr) {
  var check = i =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}
// generate a randomly filled array
var array = new Array(); // a decent way???
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
  // change code below this line
  let heap = [];
  this.insert = value => {
    heap.push(value);
    if (heap.length > 1) {
      for (let i = heap.length - 1; i > 0; i--) {
        let parent = Math.floor((i - 1) / 2);
        if (heap[i] < heap[parent]) {
          let tmp = heap[parent];
          heap[parent] = heap[i];
          heap[i] = tmp;
        }
      }
    }
  };
  this.remove = () => {
    if (heap.length === 0) return null;
    let min = heap[0];
    let size = heap.length;
    heap[0] = heap[size - 1];
    heap.pop();
    size--;
    for (let j = 0; j < size - 1; j++) {
      let left = j * 2 + 1;
      let right = j * 2 + 2;
      if (heap[j] > heap[left]) {
        let tmp = heap[j];
        heap[j] = heap[left];
        heap[left] = tmp;
      }
      if (heap[j] > heap[right]) {
        let tmp = heap[j];
        heap[j] = heap[right];
        heap[right] = tmp;
      }
    }
    return min;
  };
  this.sort = () => {
    // let minHeap = new MinHeap();
    let sorted = [];
    let size = heap.length;
    for (let k = 0; k < size; k++) {
      let min = this.remove();
      sorted.push(min);
    }
    return sorted;
  };
  // change code above this line
};
