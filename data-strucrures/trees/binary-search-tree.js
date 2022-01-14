class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (node.value === temp.value) return undefined;

      if (node.value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

const bst = new BinarySearchTree();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(52);
bst.insert(82);
bst.insert(18);
bst.insert(27);

// console.log(bst.contains(27));
console.log(bst.minValueNode(bst.root.right));

// console.log(bst);
