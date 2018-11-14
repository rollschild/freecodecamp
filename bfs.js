function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};
  if (graph.length === 0) return nodesLen;
  for (let i = 0; i < graph.length; i++) {
    // Object.assign({i: Infinity}, nodesLen);
    nodesLen[i] = Infinity;
  }
  console.log(nodesLen);
  nodesLen[root] = 0;

  let queue = [];
  let distance = 0;
  let node;
  queue.push(root);
  let num = 0;
  while (queue.length > 0) {
    if (num <= 0) distance++;
    node = queue[0];
    let arr = graph[node];
    for (let k = 0; k < arr.length; k++) {
      // every possible edge
      if (k === node) continue;
      if (nodesLen[k] < Infinity) continue;
      if (arr[k] !== 0) {
        num++;
        // edge
        queue.push(k);
        nodesLen[k] = distance;
      }
    }
    queue.shift();
    num--;
  }
  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
