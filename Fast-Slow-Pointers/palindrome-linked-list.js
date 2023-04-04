// For the given head of the linked list, find out if the linked list is a palindrome or not. 
//Return TRUE if the linked list is a palindrome. Otherwise, return FALSE.

import printListWithForwardArrow from "./print_list.js";
import LinkedList from "./linked_list.js";
import reverseLinkedList from "./linked_list_reverse.js";

function palindrome(head) {
  // Initialize variables with head
  var check, fast, midNode, revertData, savedOddMidnode, slow;
  slow = head;
  fast = head;
  revertData = null;
  midNode = head;

  while (fast && fast.next) {
    midNode = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  savedOddMidnode = null;
  if (fast) {
    savedOddMidnode = slow;
    slow = slow.next;
  }

  // It will skip the first half
  midNode.next = null;

  // Pass middle node as a head to reverse function
  // to revert the next half of linkedList
  revertData = reverseLinkedList(slow);

  check = false;
  check = compareTwoHalves(head, revertData);

  // Revert second half back to the original linked list
  revertData = reverseLinkedList(revertData);

  // Connect both halves
  // If linked list was of odd sized, connect the middle node
  // first which was skipped while reverting the second half
  if (savedOddMidnode) {
    midNode.next = savedOddMidnode;
    savedOddMidnode.next = revertData;
  } else {
    midNode.next = revertData;
  }

  // Return true if there's only one node
  // or both are pointing to NULL
  if (head === null || revertData === null) {
    return true;
  }

  if (check) {
    return true;
  }

  return false;
}

function compareTwoHalves(first_half, second_half) {

  while (first_half !== null && second_half !== null) {
    if (first_half.data !== second_half.data) {
      return false;
    } else {
      first_half = first_half.next;
      second_half = second_half.next;
    }

    
  }

  return true;
}

function main() {
  let input = [
    [2, 4, 6, 4, 2],
    [0, 3, 5, 5, 0],
    [9, 7, 4, 4, 7, 9],
    [5, 4, 7, 9, 4, 5],
    [5, 9, 8, 3, 8, 9, 5],
  ];

  let j = 1;

  for (var i = 0; i < input.length; i++) {
    let linkedList = new LinkedList();
    linkedList.createLinkedList(input[i]);
    console.log(
      j + ".\tLinked List =",
      printListWithForwardArrow(linkedList.head)
    );
    let head = linkedList.head;
    var result = (palindrome(head) === true) ? "Yes" : "No"
    console.log("\tIs it a palindrome?", result);
    j += 1;
    console.log("-".repeat(100), "\n");
  }
}

main();