//Given a binary tree, return an array containing nodes in its right view. 
//The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

const Deque = require('collections/deque'); 

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function tree_right_view(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // if it is the last node of this level, add it to the result
      if (i === levelSize - 1) {
        result.push(currentNode);
      }
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
result = tree_right_view(root);
process.stdout.write('Tree right view: ');
for (i = 0; i < result.length; i++) {
  process.stdout.write(`${result[i].val} `);
}