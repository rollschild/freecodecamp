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
        (function recursion(node) {
            if (node === null) return null;
            let right = recursion(node.right);
            let left = recursion(node.left);
            node.left = right;
            node.right = left;
            return node;
        }).bind(this)(this.root);
    }
    // change code above this line
};
