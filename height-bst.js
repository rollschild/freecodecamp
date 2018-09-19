var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    let node = this.root;
    this.findMinHeight = () => {
        if (this.root === null) return -1;
        let node = this.root;
        let minHeight = 0;

        let arr = [];
        this.traverse = (item, height) => {
            if (item == null) return;
            if (item.left === null && item.right === null) {
                arr.push(height);
                return;
            }
            this.traverse(item.left, height + 1);
            this.traverse(item.right, height + 1);
        }
        this.traverse(node, minHeight);
        return Math.min(...arr);
    }
    this.findMaxHeight = () => {
        if (this.root === null) return -1;
        let node = this.root;
        let maxHeight = 0;
        let arr = [];
        this.traverse = (item, height) => {
            if (item == null) return;
            if (item.left === null && item.right === null) {
                arr.push(height);
                return;
            }
            this.traverse(item.left, height + 1);
            this.traverse(item.right, height + 1);
        }
        this.traverse(node, maxHeight);
        return Math.max(...arr);
    }
    this.isBalanced = () => {
        if (this.root === null) return false;
        if (this.root.left === null && this.root.right === null) return true;
        this.height = (item) => {
            if (item === null) {
                return -1;
            }
            return 1 + Math.max(this.height(item.left), this.height(item.right));
        }
        this.traverse = (item) => {
            if (item === null) return true;
            let leftHeight = this.height(item.left);
            let rightHeight = this.height(item.right);
            
            if (Math.abs(leftHeight - rightHeight) <= 1 
                && this.traverse(item.left)
                && this.traverse(item.right)) {
                    return true;
            }
            return true;
        }
        // let node = this.root;
        
        return this.traverse(this.root);
    }
    // change code above this line
}
