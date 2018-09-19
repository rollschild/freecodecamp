var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {    
    this.root = null;
    // change code below this line
    this.isPresent = (element) => {
        if (this.root === null) {
            return false;
        }
        let node = this.root;
        while (node !== null) {
            if (node.value === element) {
                return true;
            }
            if (node.value > element) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return false;
    }
    // change code above this line
}
