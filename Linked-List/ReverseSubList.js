//Given the head of a LinkedList and two positions p and q,
//Reverse the LinkedList from position p to q. 

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

  function reverse_sub_list(head, p, q) {
      if (p == q) {
          return head;
      }

      //skip 'p-1' nodes, current will point to pth node
      let current = head,
        previous = null;
      let i=0;
      while (current !== null && i < p-1) {
          previous = current;
          current = current.next;
          i+=1; 
      }

      const last_node_of_first_part = previous;
      //after reversing current will become the last node of the sub-list
      const last_node_of_sub_list = current;
      let next = null; //temporarily store the next node

      i = 0;
      //reverse nodes b/w p and q
      while (current !== null && i < q - p + 1) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i += 1;
      }

      //connect with the first part
      if (last_node_of_first_part !== null) {
          //previous is first node of the sub-list
          last_node_of_first_part.next = previous;
          //p === 1, changing the first node (head) of the LinkedList
      } else {
          head = previous;
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
result = reverse_sub_list(head, 2, 4);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();