//Write a function that takes a square matrix as input. 
//A square matrix has the same number of rows and columns, e.g. 3 x 3, 4 x 4, 5 x 5. 
//It should return the same matrix rotated 90 degrees clockwise. 
//The rotation should happen in place, meaning you may not create any extra matrixes or arrays in your function.

function rotateClockwise(mat) {
    const totalLayers = Math.floor(mat.length / 2);
    
    for(let layer = 0; layer < totalLayers; layer++) {
      const lastIndex = mat.length - 1 - layer;
      for(let forwardIterator = layer + 1; forwardIterator < mat.length - layer; forwardIterator++) {
        const reverseIterator = lastIndex - forwardIterator + layer;
  
        let temp1 = mat[forwardIterator][lastIndex];
        mat[forwardIterator][lastIndex] = mat[layer][forwardIterator];
  
        let temp2 = mat[lastIndex][reverseIterator];
        mat[lastIndex][reverseIterator] = temp1;
  
        temp1 = mat[reverseIterator][layer];
        mat[reverseIterator][layer] = temp2;
  
        mat[layer][forwardIterator] = temp1;
      }
    }
  
    return mat;
}

//Time Complexity: O(n)
//Space Complexity: O(1)