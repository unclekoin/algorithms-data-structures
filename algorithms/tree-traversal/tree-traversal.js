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

  breadthFirstSearch() {
    let currentNode = this.root;
    const queue = [];
    const results = [];
    queue.push(currentNode);
  
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  
    return results;
  }
}

const bst = new BinarySearchTree();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);

console.log(bst.breadthFirstSearch())