//Reverse the first 'k' element of a given LinkedList.

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

  function reverse_first_k(head, k) {
      if (k == 1) {
          return head;
      }

      let current = head,
        previous = null;
      let i=0;
      
      //after reversing current will become the last node of the sub-list
      const last_node_of_sub_list = current;
      let next = null; //temporarily store the next node

      
      //reverse nodes for first k
      while (current !== null && i < k) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i += 1;
      }

      

      //connect with the last part
      last_node_of_sub_list.next = current;
      return head;
  }

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_first_k(head, 2, 4);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();