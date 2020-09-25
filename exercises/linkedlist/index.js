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

  //_____________________________Insert First_________________________
  //option 1
  // insertFirst(data) {
  //   this.head = new Node(data, this.head);
  // }

  //option 2 > use when any retrival of any other elements
  insertFirst(data) {
    this.insertAt(data, 0);
  }

  //_____________________________ Size ________________________________
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  //_____________________________Get First_________________________
  //option 1
  // getFirst() {
  //   return this.head;
  // }

  //option 2 > use when any retrieval of any other elements
  getFirst() {
    return this.getAt(0);
  }

  //_____________________________Get Last_________________________
  //option 1
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
    this.head = null;
  }

  //option2
  // getLast() {
  // return this.getAt(this.size() - 1);
  // }
  // clear() {
  //   this.head = null;
  // }

  //_____________________________Remove First_________________________
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  //_____________________________Remove Last_________________________
  removeLast() {
    if (!this.head) {
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

  //_____________________________Insert Last_________________________
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty
      this.head = new Node(data);
    }
  }

  //_____________________________Get At_________________________
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  //_____________________________Remove At_________________________
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  //_____________________________Insert At_________________________
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  // √ inserts a new node with data at the 0 index when the list is empty (1 ms)
  // √ inserts a new node with data at the 0 index when the list has elements
  // √ inserts a new node with data at a middle index (1 ms)
  // √ inserts a new node with data at a last index
  // √ insert a new node when index is out of bounds (1 ms)
}


// forEach(fn) {
//   let node = this.head;
//   let counter = 0;
//   while (node) {
//     fn(node, counter);
//     node = node.next;
//     counter++;
//   }
// }

//   *[Symbol.iterator]() {
//     let node = this.head;
//       while (node) {
//         yield node;
//           node = node.next;
//           }
//    }
// }  > does not pass ! why??
// jest linkedlist/test.js --watch


module.exports = { Node, LinkedList };






//A node is a basic unit of a data structure, such as a linked list or tree data structure.
//Nodes contain data and also may link to other nodes.
// Links between nodes are often implemented by pointers.
