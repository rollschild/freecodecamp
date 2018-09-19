var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.findMin = function(item) {
        if (this.root === null) {
            return null;
        }
        let node = this.root;
        let data = node.value;
        while (node !== null) {
            data = node.value;
            node = node.left;
            
        }
        return data;
    }
    this.findMax = function(item) {
        if (this.root === null) {
            return null;
        }
        let node = this.root;
        let data = node.value;
        while (node !== null) {
            data = node.value;
            node = node.right;
            
        }
        return data;
    }
    // change code above this line
}
