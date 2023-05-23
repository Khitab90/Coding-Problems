// Implement Counting Sort

function countingSort(arr, min, max) {
    let count = [];
    let z = 0;
   
    for (let i = min; i <= max; i++) {
      count[i] = 0;
    }
  
    for (let i = 0; i < arr.length; i++) {
       count[arr[i]]++;
    }
  
    for (let i = min; i <= max; i++) {
      while (count[i]-- > 0) {
        arr[z++] = i;
      }
    }
    return arr;
  }

  console.log([4,2,1,8,5,1,2]);
  console.log(countingSort([4,2,1,8,5,1,2], 1, 8));