// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data; //init data variable
        this.children = [];  //child array
    }

    add (data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !==data;
        }); //equals data or removes it
    }
}



class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift(); //shift built in arr method removes 1st element of arr 
            
            arr.push(...node.children); //'...'es 2015 spread op take elements push one by one into arr(same as for loop)
           fn(node);
        }    
    }

    traverseDF(fn) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children); //unshift built in array method takes element add onto front of arr
            fn(node);
        }
    }
}


module.exports = { Tree, Node };
