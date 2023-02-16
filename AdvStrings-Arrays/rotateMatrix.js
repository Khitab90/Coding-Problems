//Write a function that takes a matrix as input and returns a new matrix.
function rotateClockwise(matrix) {
    const newMatrix = matrix[0].map(() => []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }

    return newMatrix;
}

//Time and Space Complexity: O(n)

function rotate180(matrix) {
    return rotateClockwise(rotateClockwise(matrix));
}

function rotateCounterClockwise(matrix) {
    return rotateClockwise(rotate180(matrix));
}