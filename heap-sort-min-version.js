let MinHeap = function() {
  this.heap = [];

  this.swap = function(lhs, rhs) {
    let tmp = lhs;
    lhs = rhs;
    rhs = tmp;
  };

  this.parent = function(child) {
    if (child > 0) return Math.floor((child - 1) / 2);
  };

  this.insert = function(val) {
    this.heap.push(val);
    let pos = this.heap.length - 1;
    while (pos > 0 && this.parent(pos) >= 0) {
      if (this.heap[this.parent(pos)] > this.heap[pos]) {
        // this.swap(this.heap[this.parent(pos)], this.heap[pos]);
        let tmp = this.heap[pos];
        this.heap[pos] = this.heap[this.parent(pos)];
        this.heap[this.parent(pos)] = tmp;
      }
      pos = this.parent(pos);
    }
  };

  this.removeTop = function() {
    if (this.heap.length === 0) {
      console.log('Empty heap..');
      return;
    }
    let len = this.heap.length;
    let min = this.heap[0];
    this.heap[0] = this.heap[len - 1];
    this.heap.pop();
    --len;
    let index = 0;
    while (index < len) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      if (left < len && this.heap[left] < this.heap[index]) {
        [this.heap[left], this.heap[index]] = [
          this.heap[index],
          this.heap[left],
        ];
      }
      if (right < len && this.heap[right] < this.heap[index]) {
        [this.heap[index], this.heap[right]] = [
          this.heap[right],
          this.heap[index],
        ];
      }
      ++index;
    }
    return min;
  };

  this.sort = function() {
    let sorted = [];
    while (this.heap.length > 0) {
      let tmp = this.removeTop();
      sorted.push(tmp);
    }
    return sorted;
  };
};

module.exports = MinHeap;
