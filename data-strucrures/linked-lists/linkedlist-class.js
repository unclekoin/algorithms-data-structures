class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = value ? node : null;
    this.tail = this.head;
    this.length = value ? 1 : 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (!this.length) this.tail = null;
    
    return temp;
  }

  insert(index, value) {}
}

const myLinkedList = new LinkedList(5);

myLinkedList.push(23);
myLinkedList.push(2);
myLinkedList.push(10);
// console.log(myLinkedList.pop());
// myLinkedList.unshift(7);
console.log(myLinkedList.shift());
console.log(myLinkedList);
