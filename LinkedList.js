class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  addToHead(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  // O(1)
  addToTail(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  // O(1)
  removeHead() {
    if (!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  }

  // O(1)
  removeTail() {
    if (!this.tail) return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
  }

  // O(n)
  search(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // O(n)
  indexOf(value) {
    let currentNode = this.head;
    let index = 0;
    let arr = [];
    while (currentNode) {
      if (currentNode.value === value) {
        arr.push(index);
      }
      currentNode = currentNode.next;
      index++;
    }
    return arr.length === 0 ? "doesn't exit" : arr;
  }
}

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

let ll = new LinkedList();
ll.addToHead("hello");
ll.addToHead(42);
ll.addToHead("world");
ll.addToTail(34);
ll.addToTail("testing");
ll.addToTail(42);
ll.addToTail("testing");

console.log(ll.indexOf(42));
