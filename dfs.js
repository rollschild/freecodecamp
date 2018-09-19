function dfs(graph, root) {
  let nodes = [];
  nodes.push(root);
  let usage = new Map();
  for (let i = 0; i < graph.length; i++) {
    usage.set(i, false);
  }
  let traverse = (node) => {
    if (usage.get(node) === true) return;
    usage.set(node, true);
    let arr = graph[node];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 0) {
        if (nodes.indexOf(j) < 0) {
          nodes.push(j);
        }
        traverse(j);
      }
    }
  }
  traverse(root);
  return nodes;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
