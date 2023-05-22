// Implement Bubble Sort Algorithm
function bubbleSort(array) {
    let swapped;
    do {
       swapped = false;
       for (let i = 0; i < array.length; i++) {
          if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
            const temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
         } 
       }
     } while (swapped);
    return array;
  }

  console.log([4,2,3,1]);
  console.log(bubbleSort([4,2,3,1]));