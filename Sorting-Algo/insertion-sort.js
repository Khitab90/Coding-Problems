// Impelement Insertion Sort

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
     }
   return array;
 }

 console.log([4,5,1,2,3]);
 console.log(insertionSort([4,5,1,2,3]));