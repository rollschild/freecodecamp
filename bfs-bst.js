var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    this.levelOrder = () => {
        let queue = [];
        let arr = []
        if (this.root === null) {
            return null;
        }
        queue.push(this.root);
        while (queue.length > 0) {
            let node = queue[0];
            arr.push(node.value);
            queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return arr;
    }
    this.reverseLevelOrder = () => {
        let queue = [];
        let arr = [];
        if (this.root === null) return null;
        queue.push(this.root);
        while (queue.length > 0) {
            let node = queue[0];
            arr.push(node.value);
            queue.shift();
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
        return arr;
    }
    // change code above this line
}
