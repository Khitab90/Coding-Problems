function printListWithForwardArrow(linkedListNode) {
  let temp = linkedListNode;
  let result = '';
  let i = 0;
  while (temp !== null && i < 7) {
    result += temp.data;
    temp = temp.next;

    if (i === 6) {
      result += ' (...)';
      break;
    }

    if (temp !== null) result += ' →  ';
    // if this is the last node, print null at the end
    else result += ' → NULL';

    i++;
  }

  return result;
}

export default printListWithForwardArrow;
