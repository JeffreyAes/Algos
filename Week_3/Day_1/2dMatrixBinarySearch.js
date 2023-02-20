/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */

const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target1 = 3
// Output: true

const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target2 = 13
// Output: false

var searchMatrix = function (matrix, target) {
    let first = 0
    let last = matrix.length - 1
    arr = 0
    while (first <= last) {
        let middle = Math.floor(first + last) / 2
        if(matrix[first][matrix[first][matrix[first].length]] < target) {
            first = middle +1
        }
        else if (matrix[last][matrix[last][matrix[last].length]] > target) {
            last = middle -1
        }
        else {
            let start = 0
            let end = matrix[middle][matrix[middle].length -1]
            while (start <= end) {
                let mid = Math.floor(start + end)/2
                if (matrix[middle][start] < target) {
                    start = matrix[middle][mid] +1
                }
                else if(matrix[middle][end] > target) {
                    end = matrix[middle][mid] -1
                }
                else {
                    return true
                }
                return false
            }
        }
    }
    return false
    
};

console.log(searchMatrix(matrix1, target1))
console.log(searchMatrix(matrix2, target2))