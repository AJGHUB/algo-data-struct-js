// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
//A linked list has a head and a tail> the tail can be identified as it points to the tail as null. A circ LL has no tail. 
//A circular LL makes 2 separate variables moving them forward through while & if comparing value at every step
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();


    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }


    return false;
}

module.exports = circular;
