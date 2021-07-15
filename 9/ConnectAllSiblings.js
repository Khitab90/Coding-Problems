//Given a binary tree, connect each node with its level order successor. 
//he last node of each level should point to the first node of the next level.


const Deque = require('collections/deque'); 

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
  
    // tree traversal using 'next' pointer
    print_tree() {
      process.stdout.write("Traversal using 'next' pointer: ");
      let current = this;
      while (current !== null) {
        process.stdout.write(`${current.val} `);
        current = current.next;
      }
    }
  }
  
  function connect_all_siblings(root) {
    if (root === null) {
      return;
    }
  
    const queue = new Deque();
    queue.push(root);
    let currentNode = null,
      previousNode = null;
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  //Time Complexity: O(N)
  //Space Complexity: O(N)
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  connect_all_siblings(root);
  root.print_tree();
  