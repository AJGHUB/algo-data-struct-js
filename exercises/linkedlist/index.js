// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  } //node class api put together
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    } 
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if(last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty
      this.head = new Node (data);
    }
  }

}
module.exports = { Node, LinkedList };

//A node is a basic unit of a data structure, such as a linked list or tree data structure.
//Nodes contain data and also may link to other nodes.
// Links between nodes are often implemented by pointers.
