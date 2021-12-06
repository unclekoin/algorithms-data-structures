class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {}

  remove() {}

  reverse() {}
}

const myLinkedList = new LinkedList(5);

// myLinkedList.push(23);
// myLinkedList.push(2);
// myLinkedList.push(10);
// console.log(myLinkedList.pop());
// myLinkedList.unshift(7);
// console.log(myLinkedList.shift());
// console.log(myLinkedList.get(3));
// console.log(myLinkedList.set(1, 55));
console.log(myLinkedList);
