// Implement Bucket Sort

function bucketSort(array) {
    const n = array.length;
    const allBuckets = new Array(n);
    const sortedArray = [];
  
    if (n < 2) return array;
  
    for (let i = 0; i < n; i++) {
      allBuckets[i] = [];
    }
  
    for (let i = 0; i < n; i++) {
      const index = Math.floor(n * array[i] / 10);
      allBuckets[index].push(array[i]);
    };
  
    allBuckets.forEach(bucket => {
      insertionSort(bucket);
      bucket.forEach(element => sortedArray.push(element))
    });
  
    return sortedArray;
  }

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

console.log([5.2,1.8,4.8,5.9,2.3,6.5,2.2]);
console.log(bucketSort([5.2,1.8,4.8,5.9,2.3,6.5,2.2]));