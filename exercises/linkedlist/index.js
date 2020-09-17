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
}

module.exports = { Node, LinkedList };



//A node is a basic unit of a data structure, such as a linked list or tree data structure. 
//Nodes contain data and also may link to other nodes.
// Links between nodes are often implemented by pointers.