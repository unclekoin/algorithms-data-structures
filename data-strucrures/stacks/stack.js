class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.length) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    
    const temp = this.top;
    this.top = top.next;
    temp.next = null;

    this.length--
    return temp;
  }
}  