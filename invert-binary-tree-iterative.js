var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.invert = () => {
        if (this.root === null) return null;
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let current = queue[0];
            queue.shift();
            let tmp = current.right;
            current.right = current.left;
            current.left = tmp;
            if (current.right) queue.push(current.right);
            if (current.left) queue.push(current.left);
        }
    }
    // change code above this line
};
