//Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    print_list() {
      let temp = this;
      while (temp !== null) {
        process.stdout.write(`${temp.value} `);
        temp = temp.next;
      }
      console.log();
    }
  }
  
  function rotate(head, rotations) {
    if (head === null || head.next === null || rotations <= 0) {
      return head;
    }
  
    
    let last_node = head;
    let list_length = 1;
    while (last_node.next !== null) {
      last_node = last_node.next;
      list_length += 1;
    }
    last_node.next = head; // connect the last node with the head to make it a circular list
    rotations %= list_length; // no need to do rotations more than the length of the list
    skip_length = list_length - rotations;
    last_node_of_rotated_list = head;
    for (i = 0; i < skip_length - 1; i++) {
      last_node_of_rotated_list = last_node_of_rotated_list.next;
    }
  
    // 'last_node_of_rotated_list.next' is pointing to the sub-list of k ending nodes
    head = last_node_of_rotated_list.next;
    last_node_of_rotated_list.next = null;
    return head;
  }
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  
  process.stdout.write('Nodes of original LinkedList are: ');
  head.print_list();
  result = rotate(head, 3);
  process.stdout.write('Nodes of reversed LinkedList are: ');
  result.print_list();