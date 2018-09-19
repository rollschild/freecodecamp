var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // case 1: target has no children, change code below this line
    this.remove = (item) => {
        if (this.root === null) return null;
        let parent = this.root;
        let child = null;
        this.traverse = (node) => {
            child = node;
            if (child === null) return;
            if (child.value > item) {
                parent = child;
                this.traverse(child.left);
            } else if (child.value < item) {
                parent = child;
                this.traverse(child.right);
            }
            else {
                // target node
                if (child.left === null && child.right === null) {
                    if (child === null) return null;
                    if (parent === child) { this.root = null; return; }
                    if (parent.left == child) parent.left = null;
                    if (parent.right == child) parent.right = null;
                    return;
                }
            }
        }
        this.traverse(this.root);
    }
}
