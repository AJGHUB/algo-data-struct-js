// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//Basic Data Structure uses a queue to do xyz
//create array inside the class using add n remove methods 
//constructor method: initialise an array and assign it as a property to the new instance for the queue that is created (using es2015 JS define const)

class Queue {
constructor() {
    this.data = [];  
}

    add(record) {       //data stored in array
        this.data.unshift(record)  //to pass the record data into the front of start of array use unshift method here
    }

    remove() {      
        return this.data.pop(); //get last method from array takes whats on end of queue and returns that
    }
}

module.exports = Queue;

