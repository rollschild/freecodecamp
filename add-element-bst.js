var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = (element) => {
        if (this.root === null) {
            let node = new Node(element);
            this.root = node;
            return undefined;
        }
        let item = this.root;
        let node = new Node(element);
        while (item !== null) {
            if (item.value === element) {
                return null;
            }
            if (item.value > element) {
                if (item.left === null) {
                    item.left = node;
                    return undefined;
                }
                item = item.left;
            } else {
                if (item.right === null) {
                    item.right = node;
                    return undefined;
                }
                item = item.right;
            }
        }
    }
    // change code above this line
}
