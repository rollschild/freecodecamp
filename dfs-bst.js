var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.preorder = () => {
        if (this.root === null) return null;
        let arr = [];
        this.traverse = (node) => {
            if (node === null) return;
            // if (node.left === null && node.right === null) return node.value;
            arr.push(node.value);
            this.traverse(node.left);
            this.traverse(node.right);
        }
        let node = this.root;
        this.traverse(node);
        return arr;
    }
    this.inorder = () => {
        if (this.root === null) return null;
        let arr = [];
        this.traverse = (node) => {
            if (node === null) return;
            // if (node.left === null && node.right === null) return node.value;
            this.traverse(node.left);
            arr.push(node.value);
            this.traverse(node.right);
        }
        let node = this.root;
        this.traverse(node);
        return arr;
    }
    this.postorder = () => {
        if (this.root === null) return null;
        let arr = [];
        this.traverse = (node) => {
            if (node === null) return;
            // if (node.left === null && node.right === null) arr.push(node.value);
            
            this.traverse(node.left);
            this.traverse(node.right);
            arr.push(node.value);
        }
        let node = this.root;
        this.traverse(node);
        return arr;
    }
    // change code above this line
}
