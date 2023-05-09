// You’re given a nested list of integers. Each element is either an integer or a list whose elements may also be integers or other integer lists. 
// Your task is to implement an iterator to flatten the nested list. You will have to implement the Nested Iterator class. This class has the following functions:
//      Constructor: This initializes the iterator with the nested list.
//      Next (): This returns the next integer in the nested list.
//      Has Next (): This returns TRUE if there are still some integers in the nested list. Otherwise, it returns FALSE.

import NestedIntegers from "./nested_integers.js";

// This function inializes the stack using the
// given nestedList list
var NestedIterator = function (nestedList) {
    this.stack = [...nestedList.reverse()];
};

// hasNext() will return true if there are still some integers in the 
// stack (that has nestedList elements) and, otherwise, will return false.
NestedIterator.prototype.hasNext = function () {
    // Iterate in a stack until stack is not empty
    while (this.stack.length > 0) {
        // Save the top value of the stack
        let top = this.stack[this.stack.length - 1];
        // Check if the top value is integer, if true return True,
        // if not continue
        if (top.isInteger()) return true;
        // If the top is not an integer, it must be the list of integers
        // Pop the list from the stack and save it in the topList
        let topList = this.stack.pop().getList();
        // Save the length of the topList in i and iterate in the list
        let i = topList.length - 1;
        while (i >= 0) {
            // push the values of the nested list into the stack
            this.stack.push(topList[i]);
            i -= 1;
        }
    }
    return false;
};

// next will return the integer from the nestedList
NestedIterator.prototype.next = function () {
    // Check if there is still an integer in the stack
    if (this.hasNext())
        // If true pop and return the top of the stack
        return this.stack.pop().getInteger();
    return null;
};

function main() {
    let inputs = [
            "[1, [2, 3], 4]",
            "[3, [2, 3, 4], 4, [2, 3]]",
            "[[2, 3], 3, [2, 3], 4, [2, 3, 4, 5]]",
            "[1, [3, [4, [5, 6], 7], 8], 9]",
            "[[2, 3, [2, 3]]]",
        ],
        itr = [];

    // Test Case #1
    let nestedList = [];
    let l1 = new NestedIntegers();
    nestedList.push(new NestedIntegers(1));
    l1.add(new NestedIntegers(2));
    l1.add(new NestedIntegers(3));
    nestedList.push(l1);
    nestedList.push(new NestedIntegers(4));
    itr.push(new NestedIterator(nestedList));

    // Test Case #2
    nestedList = [];
    let l2 = new NestedIntegers();
    nestedList.push(new NestedIntegers(3));
    l2.add(new NestedIntegers(2));
    l2.add(new NestedIntegers(3));
    l2.add(new NestedIntegers(4));
    nestedList.push(l2);
    nestedList.push(new NestedIntegers(4));
    nestedList.push(l1);
    itr.push(new NestedIterator(nestedList));

    // Test Case #3
    nestedList = [];
    let l3 = new NestedIntegers();
    nestedList.push(l1);
    nestedList.push(new NestedIntegers(3));
    l3.add(new NestedIntegers(2));
    l3.add(new NestedIntegers(3));
    l3.add(new NestedIntegers(4));
    l3.add(new NestedIntegers(5));
    nestedList.push(l1);
    nestedList.push(new NestedIntegers(4));
    nestedList.push(l3);
    itr.push(new NestedIterator(nestedList));

    // Test case #4
    nestedList = [];
    nestedList.push(new NestedIntegers(1));
    l1 = new NestedIntegers();
    l1.add(new NestedIntegers(5));
    l1.add(new NestedIntegers(6));
    l2 = new NestedIntegers();
    l2.add(new NestedIntegers(4));
    l2.add(l1);
    l2.add(new NestedIntegers(7));
    l3 = new NestedIntegers();
    l3.add(new NestedIntegers(3));
    l3.add(l2);
    l3.add(new NestedIntegers(8));
    nestedList.push(l3);
    nestedList.push(new NestedIntegers(9));
    itr.push(new NestedIterator(nestedList));

    // TEST CASE 5: [[2, 3, [2, 3]]]
    nestedList = [];
    l2 = new NestedIntegers();
    l2.add(new NestedIntegers(2));
    l2.add(new NestedIntegers(3));
    l3 = new NestedIntegers();
    l3.add(new NestedIntegers(2));
    l3.add(new NestedIntegers(3));
    l3.add(l2);
    nestedList.push(l3);
    itr.push(new NestedIterator(nestedList));

    for (let i = 0; i < itr.length; i++) {
        console.log(i + 1 + ".\tOriginal structure: ", inputs[i]);
        console.log("\n\tOutput:\n");
        while (itr[i].hasNext()) console.log("\titr.next(): ", itr[i].next());
        console.log("-".repeat(100));
    }
}

main();