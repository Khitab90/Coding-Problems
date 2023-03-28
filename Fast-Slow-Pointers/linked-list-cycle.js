// Check if a linked list contains a cycle or not. If a cycle exists, return TRUE. Otherwise, return FALSE.

// const { printListWithForwardArrow } = require('./print_list');
// const { LinkedList } = require('./linked_list');
import printListWithForwardArrow from './print_list.js';
import LinkedList from './linked_list.js';

function detectCycle(head) {
  var fast, i, j, last, slow, space1, space2;
  [slow, fast] = [head, head];
  [i, j] = [0, 0];
  [space1, space2, last] = [0, 2, 5];
  console.log('\tHead pointer:', head.data);
  console.log('\tSlow pointer:', slow.data);
  console.log('\tFast pointer:', fast.data);
  console.log('\t' + printListWithForwardArrow(head));
  console.log('\t' + '  '.repeat(6 * i) + 'ŝf̂');

  // Run the loop until we reach the end of the
  // linked list or find a cycle
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    last -= 2;
    console.log('\n\tLoop index:', i);
    i += 1;
    j += 2;

    // Break the loop if fast pointer has reached at
    // the end of linked list
    if (fast === null) {
      console.log('\tSlow pointer:', slow.data);
      console.log('\tFast pointer: NULL');
      console.log('\tFast pointer has reached the end of the linked list.');
      break;
    } else {
      console.log('\tSlow pointer:', slow.data);
      console.log('\tFast pointer:', fast.data, '\n');
      console.log('\t' + printListWithForwardArrow(head));
    }

    if (slow === fast) {
      console.log('\t' + ' '.repeat(6 * i - 4) + 'ŝf̂');
      console.log(
        '\n\tBoth slow and fast pointers are pointing to the same node!'
      );
      return true;
    } else {
      if (last === -1) {
        console.log(
          '\t' +
            ' '.repeat(6 * (space2 - 1) - (6 * space1 - 1) - 3) +
            'f̂ast  ' +
            ' '.repeat(6 * i - 14) +
            'ŝlow'
        );
        space2 += 2;
      }

      if (last === -3) {
        console.log(
          '\t' +
            ' '.repeat(6 * (space2 - 1) - (6 * space1 - 1) - 5) +
            'f̂ast ' +
            ' '.repeat(6 * i - 12 - 10) +
            'ŝlow'
        );
        space2 += 2;
      }

      if (last > 0) {
        console.log(
          '\t' +
            ' '.repeat(6 * i - (i - 1) - 1) +
            'ŝlow' +
            ' '.repeat(6 * (j - 1) - 6 * i) +
            ' f̂ast'
        );
      }
    }
  }

  return false;
}

function main() {
  var input = [
    [2, 4, 6, 8, 10, 12],
    [1, 3, 5, 7, 9, 11],
    [0, 1, 2, 3, 4, 6],
    [3, 4, 7, 9, 11, 17],
    [5, 1, 4, 9, 2, 3],
  ];

  for (var i = 0; i < input.length; i++) {
    var inputLinkedList = new LinkedList();
    inputLinkedList.createLinkedList(input[i]);
    if (i % 2 === 0) {
      inputLinkedList.head.next.next.next.next.next.next =
        inputLinkedList.head.next;
    }
    console.log(i + 1 + '.\tInput:');
    console.log('\t', printListWithForwardArrow(inputLinkedList.head));
    console.log('\n\tProcessing...');

    var result = detectCycle(inputLinkedList.head) ? 'True' : 'False';

    console.log('\n\tDetected cycle =', result);
    console.log('-'.repeat(100), '\n');
  }
}

main();
