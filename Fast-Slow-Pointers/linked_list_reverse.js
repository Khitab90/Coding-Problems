function reverseLinkedList(slowPtr) {
    var next, reverse;
    reverse = null;
  
    while (slowPtr !== null) {
      next = slowPtr.next;
      slowPtr.next = reverse;
      reverse = slowPtr;
      slowPtr = next;
    }
  
    return reverse;
  }
  
  export default reverseLinkedList;
  