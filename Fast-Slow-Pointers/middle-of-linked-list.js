// Given a singly linked list, return the middle node of the linked list. If the number of nodes in the
// linked list is even, return the second middle node.

import printListWithForwardArrow from "./print_list.js";
import LinkedList from "./linked_list.js";

function getMiddleNode(head) {
    let slow = head,
        fast = head;
    // Traverse the linked list until fast reaches at the last node or NULL
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // Return the slow pointer
    return slow;
  }
  
  function main() {
    let input = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6], [3, 2, 1], [10], [1, 2]];
  
    for (var i = 0; i < input.length; i++) {
      let linkedList = new LinkedList();
      linkedList.createLinkedList(input[i]);
      console.log(i + 1 + ".\tLinked list:", printListWithForwardArrow(linkedList.head));
      console.log(
        "\tMiddle of the linked list: ",
        getMiddleNode(linkedList.head).data
      );
      console.log("-".repeat(100), "\n");
    }
  }
  
  main();